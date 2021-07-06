import React from 'react'
import Icon1 from '../../images/services/develop.png'
import Icon2 from '../../images/services/security.png'
import Icon3 from '../../images/services/systems.png'
import { PricingHeading, ServicesCard, ServicesContainer, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

export const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Desarrollo de Software</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Seguridad Informática</ServicesH2>
                        <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Administración de Sistemas</ServicesH2>
                        <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}
