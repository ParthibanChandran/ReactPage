import styled,{ keyframes } from 'styled-components';

export const AmountText=styled.span`
  font-family: BerkeleyStd;
  padding: 5px;
  margin: 0px;
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: 0.5px;
  color: #022737;
`;

export const Amount=styled.p`
  color: #69923a;
  font-family: HelveticaNeue;
  font-size: 42px;
  font-weight: 300;
  margin: 0px;
`;
export const AmountWrapper=styled.div`
  box-sizing: border-box;
  padding: 25px;
  margin-bottom: 30px;
  background-color: white;
  box-shadow: 0 9px 21px 0 rgba(128, 152, 213, 0.08);
`;

export const TooltipText=styled.span`
  visibility: hidden;
  width: 120px;
  margin: 5px;
  background-color: rgb(0,103,120,0.9);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: -5px;
  left: 110%;
  &::after {
    content: "";
    position: absolute;
    bottom: 70%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent rgb(0,103,120,0.9) transparent transparent;
  }
`;
export const Tooltip=styled.i`
  font-style: oblique;
  position: relative;
  display: inline-block;
  /* border-bottom: 1px dotted black; */
  &:hover ${TooltipText} { 
    visibility: visible;

  }
`;

export const Arrow=styled.span`
  color: #006778;
  /* background-color: #006778 */
  position: absolute;
  font-size: 24px;
  padding-left: 5px;
  &:hover {
    text-decoration: none ;
  }
  @media (max-width:768px) {
    position: unset;
  }
`; 

export const ViewRedirect=styled.a`
  font-family: HelveticaNeue;
  font-size: 16px;
  font-weight: bold;
  font-stretch: condensed;
  /* letter-spacing: 0.5px; */
  color: #006778;
  /* position: relative; */
  visibility: ${props=>props.visible?"visible":"hidden"};
&:hover ${Arrow}{
    text-decoration: none;
    transform: translate3d(10px, 0, 0);
    transition: transform 1s ease;
}
`;

