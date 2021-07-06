import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { Services } from '../../components/Services';
import { InfoSection, Pricing } from '../../components';
import InfoSection2 from '../../components/InfoSection2/InfoSection';

function Home() {
  return (
    <>
      <InfoSection style={{padding:'-200px 0'}} {...homeObjOne}  />
      <InfoSection {...homeObjTwo} />
      <InfoSection2 {...homeObjThree} />
      <Services/>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
