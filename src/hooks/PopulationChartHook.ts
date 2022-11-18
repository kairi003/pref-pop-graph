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
    chart: {reflow: false}
  };
  
  const chartRef = useRef<HighchartsReact.RefObject>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.contentBoxSize.length < 1) continue;
        const {inlineSize, blockSize} = entry.contentBoxSize[0];
        chartRef.current?.chart.setSize(inlineSize, blockSize, false);
        break;
      }
    });
    const container = containerRef.current;
    if (container) observer.observe(container);
    chartRef.current?.chart.reflow();
    return () => {observer.disconnect()};
  }, []);

  return {options, chartRef, containerRef};
}
