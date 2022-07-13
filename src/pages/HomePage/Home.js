import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';

import InfoSection3 from '../../components/InfoSection3/InfoSection';
import { Partners } from '../../components/Partners/Partners';




function Home() {
  return (
    <>
      <InfoSection style={{padding:'-200px 0'}} {...homeObjOne}  />
     <Partners/>
      <Pricing/>
      <InfoSection3 {...homeObjFour} />

    </>
  );
}

export default Home;
