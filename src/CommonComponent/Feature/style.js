import styled from 'styled-components';

export const Title=styled.div`
  flex-basis: 30%;
  padding: 0px 35px;
  font-family: BerkeleyStd;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.5px;
  color: #022737;
`;

export const Content=styled.div`
  flex-basis: 70%;
  padding: 0px 35px;
  margin: 0px 35px;
  font-family: HelveticaNeue;
  font-size: 16px;
  line-height: 1.5;
  color: #505050;
`;

export const Feature=styled.div`
    display: flex;
    /* padding: 30px; */
`;

export const FeatureText=styled.div`
    padding: 30px 0px 0px 30px;
    margin-left: 7px;
    font-family: HelveticaNeue;
    font-size: 14px;
    line-height: 1.43;
    color: #505050;
`;
export const RedirectWrapper=styled.div`
    margin: 0 auto;
    width: 32%;
`;
export const LearnText=styled.a.attrs(()=>({
    href: "#"
}))`
    font-family: HelveticaNeue;
    font-size: 16px;
    font-weight: bold;
    font-stretch: condensed;
    letter-spacing: 0.5px;
    color: #006778;
    &:hover {
        text-decoration: none;
    }
`;
export const Arrow=styled.span`
  color: #006778;
  font-size: 16px;
  padding: 5px;
`;