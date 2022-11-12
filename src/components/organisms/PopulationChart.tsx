import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type Props = {titleText: string, series: Highcharts.SeriesOptionsType[]};
const PopChart: React.FC<Props> = ({titleText, series}) => {
  const options: Highcharts.Options = {title: {text: titleText}, series };

  return <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
}

export default PopChart;