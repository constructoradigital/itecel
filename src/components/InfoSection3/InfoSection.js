import React from 'react';
//import { Link } from 'react-router-dom';
//import { Container, Button } from '../../globalStyles';
import img from '../../images/contact.jpg';
import {
  InfoSec,
  Img
} from './InfoSection.elements';

function InfoSection3({
  primary,
  paddiv,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  start,
  titsize
}) {
  return (
    <>
      <InfoSec lightBg={lightBg} >
        <Img src={img}/>
      </InfoSec>
    </>
  );
}

export default InfoSection3;
