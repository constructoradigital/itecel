import styled from 'styled-components';
import img from '../../images/contact.jpg';
export const InfoSec = styled.div`
  color: #fff;
  padding: 0px 0;
 
  
`;

export const Img = styled.img`
  padding-right: 0;
  width:100%;
  height: 100%;
      object-fit: cover;
      object-position: top center;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  
  &:hover{
    filter: saturate(110%);
    z-index:0;
}
`;
