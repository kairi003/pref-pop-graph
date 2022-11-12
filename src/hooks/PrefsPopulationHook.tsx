import {useState, useEffect, useMemo, useCallback} from 'react';
import {getPrefectures, getPopulation} from 'utils/ResasClient';
import {PrefectureData, TotalPopulationData} from 'utils/ResasModels';
import {arrayUpdater} from 'utils/HookUtils';

export const usePrefsPopulationSeries = () => {
  const [prefs, setPrefs] = useState<PrefectureData[]>([]);
  const [pops, setPops] = useState<TotalPopulationData[][]>([]);
  const [checkedList, setCheckedList] = useState<boolean[]>([]);
  const [loadingList, setLoadingList] = useState<boolean[]>([]);

  const series = useMemo(() => pops.filter((_,i) => checkedList[i])
    .map((popData, i) => ({
      type: 'line',
      name: prefs[i],
      data: popData
    })), [pops, checkedList, prefs]);

  useEffect(() => {
    getPrefectures().then(prefData => {
      setPrefs(prefData);
      setPops(Array(prefData.length).fill([]));
      setCheckedList(Array(prefData.length).fill(false));
      setLoadingList(Array(prefData.length).fill(false));
    }).catch(err => {
      console.error('GET Prefs Error');
      console.error(err);
    });
  }, []);

  const checkHandler = useCallback((index: number): void => {
    setCheckedList(arrayUpdater(index, false));
    setLoadingList(arrayUpdater(index, false));

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

  const unCheckHander = useCallback((index: number): void => {
    setCheckedList(arrayUpdater(index, false));
  }, []);

  return {series, prefs, checkedList, loadingList, checkHandler, unCheckHander};
}