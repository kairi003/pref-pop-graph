import React from 'react';
import {PrefecturePopulationReturnType} from 'hooks/PrefecturePopulationHook';
import PopulationChart from 'components/organisms/PopulationChart';
import PrefBlockList from 'components/organisms/PrefBlockList';
import style from './SPTemplate.module.css';
import Header, {HeaderProps} from 'components/organisms/Header';
import Footer, {FooterProps} from 'components/organisms/Footer';

type Props = PrefecturePopulationReturnType & {
  headerProps: HeaderProps,
  footerProps: FooterProps
};

export const SPTemplate: React.FC<Props> = ({prefPops, prefCheckProps, headerProps, footerProps}) => {
  return <div className={style.SPTemplate}>
  <Header {...headerProps} className={style.Header}/>
  <main className={style.main}>
    <PrefBlockList {...prefCheckProps} />
    <PopulationChart prefPops={prefPops} />
  </main>
  <Footer {...footerProps} className={style.Footer}/>
</div>;
}

export default SPTemplate;