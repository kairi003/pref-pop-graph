import React from 'react';
import {PrefecturePopulationReturnType} from 'hooks/PrefecturePopulationHook';
import PrefCheckList from 'components/organisms/PrefCheckList';
import PopulationChart from 'components/organisms/PopulationChart';
import style from './PCTemplate.module.css'
import Footer from 'components/organisms/Footer'

type Props = PrefecturePopulationReturnType;
export const PCTemplate: React.FC<Props> = ({prefPops, prefCheckProps}) => {
  return <div className={style.PCTemplate}>
  <header>
    <h1>都道府県人口推移グラフ</h1>
  </header>
  <main className={style.main}>
    <PrefCheckList {...prefCheckProps} />
    <PopulationChart prefPops={prefPops} />
  </main>
  <Footer publishYear={2022} auther="author" repository='repo' mail='mail'/>
</div>;
}

export default PCTemplate;