import React from 'react';
import {PrefecturePopulationReturnType} from 'hooks/PrefecturePopulationHook';
import PopulationChart from 'components/organisms/PopulationChart';
import style from './SPTemplate.module.css'
import PrefBlockList from 'components/organisms/PrefBlockList';
import Footer from 'components/organisms/Footer'

type Props = PrefecturePopulationReturnType;
export const SPTemplate: React.FC<Props> = ({prefPops, prefCheckProps}) => {
  return <div className={style.SPTemplate}>
  <header>
    <h1>都道府県人口推移グラフ</h1>
  </header>
  <main className={style.main}>
    <PrefBlockList {...prefCheckProps} />
    <PopulationChart prefPops={prefPops} />
  </main>
  <Footer publishYear={2022} auther="author" repository='repo' mail='mail'/>
</div>;
}

export default SPTemplate;