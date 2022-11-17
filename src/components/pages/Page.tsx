import React from 'react';
import MediaQuery from "react-responsive";
import SPTemplate from "components/templates/SPTemplate";
import PCTemplate from "components/templates/PCTemplate";
import { usePrefecturePopulation} from 'hooks/PrefecturePopulationHook';
import {HeaderProps} from "components/organisms/Header";
import {FooterProps} from "components/organisms/Footer";

const Page: React.FC = () => {
  const props = usePrefecturePopulation();
  const headerProps: HeaderProps = {
    title: '都道府県人口推移グラフ',
    description: '都道府県ごとの人口推移グラフです。'
  }
  const footerProps: FooterProps = {
    publishYear: 2022,
    auther: 'kairi',
    repository: 'https://github.com/kairi003/pref-pop-graph',
    mail: 'kairi.satellite@gmail.com'
  }
  const thr = process.env.REACT_APP_DEVICE_WIDTH_THRESHOLD || '0px';
  return <>
    <MediaQuery query={`(max-width: ${thr})`}>
      <SPTemplate {...props} headerProps={headerProps} footerProps={footerProps}/> 
    </MediaQuery>
    <MediaQuery query={`not (max-width: ${thr})`}>
      <PCTemplate {...props} headerProps={headerProps} footerProps={footerProps}/> 
    </MediaQuery>
  </>;
}

export default Page;