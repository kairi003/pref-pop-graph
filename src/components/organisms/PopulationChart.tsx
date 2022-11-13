import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useRef, useEffect } from 'react';
import style from './PopulationChart.module.css'

type Props = {titleText: string, series: Highcharts.SeriesOptionsType[]};
const PopulationChart: React.FC<Props> = ({titleText, series}) => {
  const options: Highcharts.Options = {title: {text: titleText}, series };
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