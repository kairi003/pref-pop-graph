import React from 'react';
import {usePrefsPopulationSeries} from 'hooks/PrefsPopulationHook';
import PrefCheckList from 'components/organisms/PrefCheckList';
import PopulationChart from 'components/organisms/PopulationChart';
import style from './PCTemplate.module.css'

type Props = ReturnType<typeof usePrefsPopulationSeries>;
export const PCTemplate: React.FC<Props> = ({series, prefProps}) => {
  return <div className={style.PCTemplate}>
  <header>
    <h1>都道府県人口推移グラフ</h1>
  </header>
  <main className={style.main}>
    <PrefCheckList {...prefProps} />
    <PopulationChart series={series} />
  </main>
  <footer>kairi</footer>
</div>;
}

export default PCTemplate;