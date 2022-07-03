import React from 'react'
import Icon1 from '../../images/services/webdesign.svg'
import Icon2 from '../../images/services/mobiledesign.svg'
import Icon3 from '../../images/services/storeonline.svg'
import Icon4 from '../../images/services/digitalmarketing.svg'
import Icon5 from '../../images/services/graphicdesign.svg'
import Icon6 from '../../images/services/officesolutions.svg'
import Icon7 from '../../images/services/softwaresale.svg'
import Icon8 from '../../images/services/more.svg'
import { Line, Objectline, ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './GaleryElements'

export const Galeria = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Nuestros Productos</ServicesH1>
                <Objectline></Objectline>
                <ServicesP>Estos son algunos de nuestros servicios y no estan limitados unicamente a los ilutrados en esta sección.</ServicesP>
                <Line></Line>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Diseño de Páginas Web</ServicesH2>
                        <ServicesP></ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Diseño de Aplicaciones Móviles</ServicesH2>
                        <ServicesP></ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Diseño de Tiendas Online</ServicesH2>
                        <ServicesP></ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon4}/>
                        <ServicesH2>Marketing Digital y publicidad</ServicesH2>
                        <ServicesP></ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon5}/>
                        <ServicesH2>Diseño gráfico</ServicesH2>
                        <ServicesP></ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon6}/>
                        <ServicesH2>Soporte y Soluciones Ofimaticas</ServicesH2>
                        <ServicesP></ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon7}/>
                        <ServicesH2>Venta de Software de Terceros</ServicesH2>
                        <ServicesP></ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon8}/>
                        <ServicesH2>Mas...</ServicesH2>
                        <ServicesP></ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}
