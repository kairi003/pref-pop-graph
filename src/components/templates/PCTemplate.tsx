import React from 'react';
import {PrefecturePopulationReturnType} from 'hooks/PrefecturePopulationHook';
import PrefCheckList from 'components/organisms/PrefCheckList';
import PopulationChart from 'components/organisms/PopulationChart';
import style from './PCTemplate.module.css'

type Props = PrefecturePopulationReturnType;
export const PCTemplate: React.FC<Props> = ({prefPops, prefProps}) => {
  return <div className={style.PCTemplate}>
  <header>
    <h1>都道府県人口推移グラフ</h1>
  </header>
  <main className={style.main}>
    <PrefCheckList {...prefProps} />
    <PopulationChart prefPops={prefPops} />
  </main>
  <footer>kairi</footer>
</div>;
}

export default PCTemplate;