import React from 'react';
import {usePrefsPopulationSeries} from 'hooks/PrefsPopulationHook';
import PopulationChart from 'components/organisms/PopulationChart';
import style from './SPTemplate.module.css'
import PrefBlockList from 'components/organisms/PrefBlockList';

export const SPTemplate = () => {
  const {series, prefProps} = usePrefsPopulationSeries();
  return <div className={style.SPTemplate}>
  <header></header>
  <main className={style.main}>
    <PrefBlockList {...prefProps} />
    <PopulationChart titleText="hogehoge" series={series} />
  </main>
  <footer></footer>
</div>;
}

export default SPTemplate;