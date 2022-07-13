import React from 'react';
import { InfoSection, Pricing } from '../../components';
import {Servicesc } from '../../components/Services';
import InfoSection2 from '../../components/InfoSection2/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from './Data';


function Services() {
  return (
    <>
     
      <InfoSection {...homeObjTwo} />
      <InfoSection2 {...homeObjThree}/>
      <Servicesc/>

      

    </>
  );
}

export default Services;
