import styled from 'styled-components';
import img from '../../images/i2.jpg';
export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;

  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.5)
   ), url("${img}");
  background-size: cover;
  background-repeat: no-repeat;

  
  
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;

  
`;

export const InfoColumn = styled.div`
max-width: 100%;
flex-basis: 100%;
display: flex;
justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 80%;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  text-align:center;
`;


export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
  text-align:center;
`;

export const Subtitle = styled.p`
  max-width: 100%;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
  text-align:center;
`;
