import React from 'react';
import { Link } from 'react-router-dom';
import { Container} from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle
} from './InfoSectionPrin.elements';

function InfoSection2({
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
  img,
  start,
  titsize
}) {
  return (
    <>
      <InfoSec lightBg={lightBg} style={{padding:`${paddiv}`}} img={img}>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText} style={{fontSize:`${titsize}`}}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/contacto'>

                </Link>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection2;
