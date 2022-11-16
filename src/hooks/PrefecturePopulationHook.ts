import {useState, useEffect, useMemo, useCallback} from 'react';
import {getPrefectures, getPopulation} from 'utils/ResasClient';
import {PrefectureData, TotalPopulationData} from 'utils/ResasModels';
import {arrayUpdater} from 'utils/HookUtils';
import {LoadingState} from 'utils/CommonModels';

export type PrefecturePopulationData = PrefectureData & {popData: TotalPopulationData[]};
export type PrefectureCheckListProps = {
  prefs: PrefectureData[],
  checkedList: boolean[],
  loadingList: boolean[],
  onChecked: (index: number) => void,
  onUnChecked: (index: number) => void,
  state: LoadingState
}
export type PrefecturePopulationReturnType = {
  prefPops: PrefecturePopulationData[],
  prefCheckProps: PrefectureCheckListProps
}

/**
 * 人口グラフのSeriesと都道府県チェックを管理するカスタムフック
 * @returns PrefecturePopulationReturnType
 */
export const usePrefecturePopulation = (): PrefecturePopulationReturnType => {
  const [prefs, setPrefs] = useState<PrefectureData[]>([]);
  const [pops, setPops] = useState<TotalPopulationData[][]>([]);
  const [checkedList, setCheckedList] = useState<boolean[]>([]);
  const [loadingList, setLoadingList] = useState<boolean[]>([]);
  const [prefsState, setPrefsState] = useState<LoadingState>('LOADING');

  const prefPops: (PrefecturePopulationData[]) = useMemo(() =>
    pops.map((popData, i) => ({popData, ...prefs[i]}))
    .filter((_,i) => checkedList[i]), [pops, checkedList, prefs]);

  /**
   * マウント時に実行
   * RESASから都道府県情報を得る
   */
  useEffect(() => {
    getPrefectures().then(prefData => {
      setPrefs(prefData);
      setPops(Array(prefData.length).fill([]));
      setCheckedList(Array(prefData.length).fill(false));
      setLoadingList(Array(prefData.length).fill(false));
      setPrefsState('DONE');
    }).catch(err => {
      setPrefsState('ERROR');
      console.error('GET Prefs Error');
      console.error(err);
    });
  }, []);

  /**
   * index番目の都道府県が選択されたとき
   * @param index
   */
  const checkHandler = useCallback((index: number): void => {
    setCheckedList(arrayUpdater(index, true));
    setLoadingList(arrayUpdater(index, true));

    getPopulation(prefs[index].prefCode).then(popData => {
      setPops(arrayUpdater(index, popData));
    }).catch(err => {
      setCheckedList(arrayUpdater(index, false));
      console.error('GET Pop Error');
      console.error(err);
    }).finally(() => {
      setLoadingList(arrayUpdater(index, false));
    });
  }, [prefs]);

  /**
   * index番目の都道府県の選択が外れたとき
   * @param index 
   */
  const unCheckHander = useCallback((index: number): void => {
    setCheckedList(arrayUpdater(index, false));
  }, []);

  return {prefPops, prefCheckProps: {prefs, checkedList, loadingList, onChecked: checkHandler, onUnChecked: unCheckHander, state: prefsState}};
}

export default usePrefecturePopulation;
