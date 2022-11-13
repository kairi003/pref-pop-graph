import React from 'react';
import MediaQuery from "react-responsive";
import SPTemplate from "components/templates/SPTemplate"
import PCTemplate from "components/templates/PCTemplate"
import { usePrefsPopulationSeries } from 'hooks/PrefsPopulationHook';

const Page: React.FC = () => {
  const props = usePrefsPopulationSeries();
  return <>
    <MediaQuery query="(max-width: 900px)">
      <SPTemplate {...props}/> 
    </MediaQuery>
    <MediaQuery query="not (max-width: 900px)">
      <PCTemplate {...props}/> 
    </MediaQuery>
  </>;
}

export default Page;