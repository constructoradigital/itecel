import React from 'react';
import { Button } from '../../globalStyles';
//import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import {FaCode} from 'react-icons/fa'
import {AiFillDatabase} from "react-icons/ai";
import {SiSpringsecurity} from "react-icons/si";
//import { GiFloatingCrystal } from 'react-icons/gi';


import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nuestros Servicios</PricingHeading>
          <PricingContainer>
            <PricingCard to='/contacto'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaCode />
                </PricingCardIcon>
                <PricingCardPlan>Software</PricingCardPlan>
                <PricingCardCost>Developement</PricingCardCost>
                <PricingCardLength>Desarrollo de Software</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Puntos de Venta</PricingCardFeature>
                  <PricingCardFeature>Aplicaciones Web</PricingCardFeature>
                  <PricingCardFeature>Seo y Marketing</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Mas Información...</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/contacto'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <SiSpringsecurity/>
                </PricingCardIcon>
                <PricingCardPlan>Cyber</PricingCardPlan>
                <PricingCardCost>Security</PricingCardCost>
                <PricingCardLength>Ciberseguridad</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Pentesting</PricingCardFeature>
                  <PricingCardFeature>Incident Response</PricingCardFeature>
                  <PricingCardFeature>Proactive Services</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Mas Información...</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/contacto'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiFillDatabase/>
                </PricingCardIcon>
                <PricingCardPlan>Systems</PricingCardPlan>
                <PricingCardCost>Administration</PricingCardCost>
                <PricingCardLength>Infraestructura</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Consultoría</PricingCardFeature>
                  <PricingCardFeature>Implementaciones</PricingCardFeature>
                  <PricingCardFeature>Soporte</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Mas Información...</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
