import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 1000px){
        height: 1500px;
        margin-top:200px;
    }

    @media screen and (max-width: 768px){
        height: 2900px;
        margin-top:-80px;
    }
    @media screen and (max-width: 480px){
        height: 3200px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }


`


export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    border-radius: 0px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.01);
        transition: all 0.2s ease-in-out;
        filter: brightness(95%);
        cursor: pointer;
    }
`
export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color:#grey;
    margin-bottom: 10px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size:1rem;
    margin-bottom: 10px;

`
export const ServicesP = styled.p`
    font-size: 20px;
    margin-bottom: 25px;
    text-align: center;
`
export const Line = styled.div`
    border-top: 1px solid #dedede;
    margin-left:20px;
    margin-right:20px;
    width: 50%;
    margin-bottom: 25px;
`
export const Objectline = styled.div`
    height: 5px;
    width: 320px;
    background: #0044cb;
    margin-bottom: 30px;
    //background-image: url("../../images/separador.png");
`




