import React from 'react';
import {PrefecturePopulationReturnType} from 'hooks/PrefecturePopulationHook';
import PopulationChart from 'components/organisms/PopulationChart';
import style from './SPTemplate.module.css'
import PrefBlockList from 'components/organisms/PrefBlockList';

type Props = PrefecturePopulationReturnType;
export const SPTemplate: React.FC<Props> = ({prefPops, prefProps}) => {
  return <div className={style.SPTemplate}>
  <header>
    <h1>都道府県人口推移グラフ</h1>
  </header>
  <main className={style.main}>
    <PrefBlockList {...prefProps} />
    <PopulationChart prefPops={prefPops} />
  </main>
  <footer>kairi</footer>
</div>;
}

export default SPTemplate;