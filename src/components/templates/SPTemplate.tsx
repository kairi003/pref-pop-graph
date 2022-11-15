import React from 'react';
import {usePrefsPopulationSeries} from 'hooks/PrefsPopulationHook';
import PopulationChart from 'components/organisms/PopulationChart';
import style from './SPTemplate.module.css'
import PrefBlockList from 'components/organisms/PrefBlockList';

type Props = ReturnType<typeof usePrefsPopulationSeries>;
export const SPTemplate: React.FC<Props> = ({series, prefProps}) => {
  return <div className={style.SPTemplate}>
  <header>
    <h1>都道府県人口推移グラフ</h1>
  </header>
  <main className={style.main}>
    <PrefBlockList {...prefProps} />
    <PopulationChart series={series} />
  </main>
  <footer>kairi</footer>
</div>;
}

export default SPTemplate;