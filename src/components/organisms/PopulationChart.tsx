import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import style from './PopulationChart.module.css';
import {PrefecturePopulationData} from 'hooks/PrefecturePopulationHook';
import {usePopulationChart} from 'hooks/PopulationChartHook';

type Props = {prefPops: PrefecturePopulationData[]};
const PopulationChart: React.FC<Props> = ({prefPops}) => {
  const {options, chartRef} = usePopulationChart(prefPops);

  return <div className={style.PopulationChart}>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartRef}
    />
  </div>;
}

export default PopulationChart;