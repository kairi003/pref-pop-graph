import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef, useEffect } from 'react';
import style from './PopulationChart.module.css'
import {PrefecturePopulationData} from 'hooks/PrefecturePopulationHook'

type Props = {prefPops: PrefecturePopulationData[]};
const PopulationChart: React.FC<Props> = ({prefPops}) => {
  const options: Highcharts.Options = {
    title: {text: undefined},
    series: prefPops.map(({prefCode, prefName, popData}, index) => ({
      type: 'line',
      name: prefName,
      data: popData.map(({year, value}) => ({x: year, y: value})),
      id: prefCode.toString(),
      index: index
    })),
    yAxis: {title: {text: '人口数', align: 'high'}},
    xAxis: {title: {text: '年度', align: 'high'}, max: new Date().getFullYear()},
    tooltip: {valueSuffix: '人'},
    chart: {height: '65%'},
  };
  const ref = useRef<HighchartsReact.RefObject>(null);
  // Highchartsはresizeイベントを検知して再描画を行う
  // 最初のスクロールバー描画はload後でresizeは発火しないため再描画を明示する
  useEffect(() => {
    window?.addEventListener('load', () => ref.current?.chart.reflow());
  }, []);

  return <div className={style.PopulationChart}>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={ref}
    />
  </div>;
}

export default PopulationChart;