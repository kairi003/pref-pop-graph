import {useRef, useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {PrefecturePopulationData} from 'hooks/PrefecturePopulationHook';

export const usePopulationChart = (prefPops: PrefecturePopulationData[]) => {
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
    xAxis: {title: {text: '年度',   align: 'high'}, max: new Date().getFullYear()},
    tooltip: {valueSuffix: '人'},
    chart: {height: '65%', reflow: false},
  };
  
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  useEffect(() => {
    const observer = new ResizeObserver(() => {chartRef.current?.chart.reflow()});
    const container = chartRef.current?.container.current;
    if (container) observer.observe(container);
    chartRef.current?.chart.reflow();
    return () => {observer.disconnect()};
  }, []);

  return {options, chartRef};
}
