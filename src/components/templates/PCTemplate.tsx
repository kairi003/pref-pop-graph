import React from 'react';
import {usePrefsPopulationSeries} from 'hooks/PrefsPopulationHook';
import PrefCheckList from 'components/organisms/PrefCheckList';
import PopulationChart from 'components/organisms/PopulationChart';
import style from './PCTemplate.module.css'

export const PCTemplate = () => {
  const {series, prefProps} = usePrefsPopulationSeries();
  return <div className={style.PcTemplate}>
  <header></header>
  <main className={style.main}>
    <PrefCheckList {...prefProps} />
    <PopulationChart titleText="hogehoge" series={series} />
  </main>
  <footer></footer>
</div>;
}

export default PCTemplate;