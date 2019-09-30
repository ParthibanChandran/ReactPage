import React from "react";
import {
  PortfolioText,
  TitleText,
  PortfolioValuesWrapper,
  Values,
  IndividualBuilderTitle,
  IndividualBuilderValue
} from "./style";
import { connect } from "react-redux";

export function PortfolioBuilders(props) {
  let list = props.a.toArray();
  return (
    <React.Fragment>
      {list.map(value => {
        return (
          <div>
            <PortfolioText>Portfolio Builders</PortfolioText>
            <TitleText>{value.toObject()["Title"]}</TitleText>
            <PortfolioValuesWrapper>
              <Values>
                <IndividualBuilderTitle>NAV</IndividualBuilderTitle>
                <IndividualBuilderValue>
                  {value.toObject()["Nav"]}
                </IndividualBuilderValue>
              </Values>
              <Values>
                <IndividualBuilderTitle>Units</IndividualBuilderTitle>
                <IndividualBuilderValue>
                  {value.toObject()["Units"]}
                </IndividualBuilderValue>
              </Values>
              <Values>
                <IndividualBuilderTitle>Market Value</IndividualBuilderTitle>
                <IndividualBuilderValue>
                  {value.toObject()["Market_value"]}
                </IndividualBuilderValue>
              </Values>
            </PortfolioValuesWrapper>
            <TitleText>{value.toObject()["Title"]}</TitleText>
            <PortfolioValuesWrapper>
              <Values>
                <IndividualBuilderTitle>NAV</IndividualBuilderTitle>
                <IndividualBuilderValue>
                  {value.toObject()["Nav"]}
                </IndividualBuilderValue>
              </Values>
              <Values>
                <IndividualBuilderTitle>Units</IndividualBuilderTitle>
                <IndividualBuilderValue>
                  {value.toObject()["Units"]}
                </IndividualBuilderValue>
              </Values>
              <Values>
                <IndividualBuilderTitle>Market Value</IndividualBuilderTitle>
                <IndividualBuilderValue>
                  {value.toObject()["Market_value"]}
                </IndividualBuilderValue>
              </Values>
            </PortfolioValuesWrapper>
          </div>
        );
      })}
    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  a: state.getIn(["PortfolioValues"])
});

export default connect(mapStateToProps)(PortfolioBuilders);
