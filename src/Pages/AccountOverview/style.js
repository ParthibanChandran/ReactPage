import styled from 'styled-components';

export const Container=styled.div`
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 768px) {
        max-width: 768px;
        padding: 0px 20px;
    }
`;
 export const Heading=styled.p`
  font-family: 'BerkeleyStd';
  margin: 0px;
  font-size: 42px;
  line-height: 1.14;
  letter-spacing: 0.5px;
  color: #022737;
  padding-bottom: 10px;
 `;
 export const Accountname=styled.p`
  font-family: BerkeleyStd;
  margin: 0px;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.5;
  color: #022737;
 `;
 export const BalanceDate=styled.p`
 padding-bottom: 20px;
 /* margin-bottom: 20px; */
  font-family: HelveticaNeue;
  margin: 0px;
  font-size: 16px;
  line-height: 1.5;
  color: #505050;
 `;
export const Notice=styled.div`
    background-color: #f2f2f2;
    padding: 15px;
    border-radius: 0px;
    border-left: 4px solid #e37222 !important;
    border: none;
    margin-bottom: 35px;
`;
export const Content=styled.span`
    padding-left: 10px;
    font-family: HelveticaNeue;
`;

export const WidthWrapper=styled.div`
    background-color: #eaeaea;   
`;
export const Dashboard=styled(Container)`
     padding: 35px 0px; 
`;

export const ActivityContainer=styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const AlignmentLeft=styled.div`
    flex-basis: 30%;
`;
export const AlignmentRight=styled.div`
    flex-basis: 70%;
    margin-left: 30px;
    box-shadow: 0 9px 21px 0 rgba(128, 152, 213, 0.08);
    border: solid 1px #eaeaea;
    background-color: #ffffff;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        white-space: nowrap;
        overflow: scroll;  
        margin-left: 0px; 
    }
`;
export const ButtonAlignment=styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    @media (max-width:768px) {
        flex-direction: column;
    }
`;
export const Dropdown=styled.select`
  font-family: HelveticaNeue;
  font-size: 16px;
  font-weight: bold;
  font-stretch: condensed;
  letter-spacing: 0.5px;
  color: #006778;
  border: solid 1px #d4d4d4;
  background-color: #ffffff;
`;
export const ButtonWrapper=styled(ButtonAlignment)`
    margin-bottom: none;
    margin: 30px 0px;
    @media (max-width:768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const AccountActivityText=styled.p`
  font-family: HelveticaNeue;
  font-size: 16px;
  line-height: 1.5;
  color: #505050;
}
`;

export const BalanceOverTimeText=styled.p`
  object-fit: contain;
  font-family: BerkeleyStd;
  font-size: 36px;
  line-height: 1.17;
  letter-spacing: 0.5px;
  color: #022737;
`;

export const GraphText=styled.p`
  font-family: HelveticaNeue;
  font-size: 16px;
  line-height: 1.5;
  color: #505050;
  width: 50%;
`;

export const RangeButtonWrapper=styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ViewRangeWrapper=styled.div`
  margin-left: 20px;
  font-family: HelveticaNeue;
  font-size: 16px;
  color: #606060;
}
`;

export const RangeButton=styled.button`
    margin-left: 10px;
    border-radius: 5px;
    border: solid 1.2px #979797;
    color: #0d504d;
    background-color: white;
    &:focus {
        background-color: #0d504d;
        color: white;
        outline: none;
    }
`;

export const FromToDate=styled.span`
    font-family: HelveticaNeue;
  font-size: 16px;
  line-height: 1.5;
  color: #505050;
  margin-right: 10px;
`;

export const DateText=styled.span`
    font-family: HelveticaNeue;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: #022737;
  margin-left: 10px;
`;

export const InvestmentDate=styled.span`
    font-family: HelveticaNeue;
  font-size: 16px;
  line-height: 1.5;
  color: #505050;
`;

export const InvestmentTitle=styled.p`
  object-fit: contain;
  font-family: BerkeleyStd;
  font-size: 36px;
  line-height: 1.17;
  letter-spacing: 0.5px;
  color: #022737;
`;
export const GraphWithPortfolio=styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const DonutGraphWrapper=styled.div`
    flex-basis: 50%;
    background-color: white;
    position: relative;
    
`;

export const ArrowRight=styled.div`
position: absolute;
right: -30px;
top: 330px;
    width: 0; 
  height: 0; 
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 30px solid white;
  @media (max-width:768px) {
      display: none;
  }
`;

export const PortfolioWrapper=styled.div`
    flex-basis: 48%;
    margin-left: 30px;
    height: 728px;
    overflow-y : scroll;
    @media (max-width: 768px) {
        height: 200px;
        overflow-y : scroll;
    }
    /* ::-webkit-scrollbar-track { 
background : #555999;
border-radius: 10px;
}
::-webkit-scrollbar-thumb { 
background : rgba(255,255,255,0.5);
border-radius: 10px;
box-shadow:  0 0 6px rgba(0, 0, 0, 0.5);
} */
`;

export const AssetText=styled.p`
    font-family: BerkeleyStd;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.5px;
  color: #022737;
  padding: 20px;
`;