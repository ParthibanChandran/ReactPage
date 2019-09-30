import styled from 'styled-components';

export const Arrow=styled.span`
  color: white;
  font-size: 16px;
  /* padding: 5px; */
  padding-left: 20px;
`;

export const Buttons=styled.button`
  width: ${props => props.width || "273px"};
  height: 50px;
  background-color: #006778;
  border: none;
  font-family: HelveticaNeue;
  font-size: 16px;
  font-weight: bold;
  font-stretch: condensed;
  letter-spacing: 0.5px;
  color: #ffffff;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;