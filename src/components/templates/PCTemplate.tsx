import React from 'react';
import {PrefecturePopulationReturnType} from 'hooks/PrefecturePopulationHook';
import PopulationChart from 'components/organisms/PopulationChart';
import PrefCheckList from 'components/organisms/PrefCheckList';
import style from './PCTemplate.module.css';
import Header, {HeaderProps} from 'components/organisms/Header';
import Footer, {FooterProps} from 'components/organisms/Footer';

type Props = PrefecturePopulationReturnType & {
  headerProps: HeaderProps,
  footerProps: FooterProps
};

export const PCTemplate: React.FC<Props> = ({prefPops, prefCheckProps, headerProps, footerProps}) => {
  return <div className={style.PCTemplate}>
  <Header {...headerProps}/>
  <main className={style.main}>
    <PrefCheckList {...prefCheckProps} />
    <PopulationChart prefPops={prefPops} />
  </main>
  <Footer {...footerProps}/>
</div>;
}

export default PCTemplate;