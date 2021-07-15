import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { Services } from '../../components/Services';
import { InfoSection } from '../../components';
import InfoSection2 from '../../components/InfoSection2/InfoSection';
import InfoSection3 from '../../components/InfoSection3/InfoSection';


function Home() {
  return (
    <>
      <InfoSection style={{padding:'-200px 0'}} {...homeObjOne}  />
      <InfoSection {...homeObjTwo} />
      <InfoSection2 {...homeObjThree} />
      <Services/>
      <img src="../../images/contact.jpg" />
      <InfoSection3 {...homeObjFour} />

    </>
  );
}

export default Home;
