import React, { Component } from "react";
import {
  Container,
  Heading,
  Accountname,
  BalanceDate,
  Notice,
  Content,
  WidthWrapper,
  Dashboard,
  ActivityContainer,
  AlignmentLeft,
  AlignmentRight,
  ButtonAlignment,
  Dropdown,
  ButtonWrapper,
  AccountActivityText,
  BalanceOverTimeText,
  GraphText,
  PortfolioWrapper,
  DonutGraphWrapper,
  GraphWithPortfolio,
  InvestmentTitle,
  InvestmentDate,
  RangeButtonWrapper,
  ViewRangeWrapper,
  RangeButton,
  FromToDate,
  DateText,
  ArrowRight,
  AssetText
} from "./style";
import BalanceComponent from "../../CommonComponent/Balance/BalanceComponent";
import Contributions from "./Component/Contributions/Contributions";
import ButtonComponent from "../../CommonComponent/Button/ButtonComponent";
import Feature from "../../CommonComponent/Feature/feature";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import InvestmentAllocation from "./Component/InvestmentAllocation/InvestmentAllocation";
import LineChart from "./Component/LineChartComponent/LineChart";
import DonutGraph from '../AccountOverview/Component/DonutGraphComponent/DonutGraph'
export default class AccountOverview extends Component {
  state = {
    toggle: true
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Container>
            <p>Home > Account Overview</p>
            <Heading>Account Overview</Heading>
            <Accountname>The Church Fund - A1050919</Accountname>
            <BalanceDate>Balances as of 12/12/2012</BalanceDate>
            <Notice className="alert alert-secondary alert-dismissible">
              <button type="button" className="close" data-dismiss="alert">
                &times;
              </button>
              <i className="fa fa-exclamation-triangle"></i>
              <Content>
                There is a <a href="#">Pending Contribution</a> on your Account
                that needs attention.
              </Content>
            </Notice>
          </Container>
          <WidthWrapper>
            <Dashboard>
              <ActivityContainer>
                <AlignmentLeft>
                  <BalanceComponent redirect={!this.state.toggle} />
                  <BalanceComponent redirect={this.state.toggle} />
                </AlignmentLeft>
                <AlignmentRight>
                  <Switch>
                    <Route path="/home" component={Contributions} />
                    <Redirect from="/" to="/home" />
                  </Switch>
                </AlignmentRight>
              </ActivityContainer>
              <ButtonAlignment>
                <ButtonComponent val={"Contributions"} />
                <ButtonComponent val={"Grant"} />
                <ButtonComponent val={"Exchange"} />
                <Dropdown>
                  <option>MANAGE YOUR ACCOUNT</option>
                  <option value="">MY ACCOUNT DETAILS</option>
                  <option value="">DOCUMENT CENTER</option>
                  <option value="">TRANSACTION SUMMARY</option>
                </Dropdown>
              </ButtonAlignment>
              <Feature />
            </Dashboard>
          </WidthWrapper>
          <Dashboard>
            <AccountActivityText>Account Activity</AccountActivityText>
            <BalanceOverTimeText>Balance Over Time</BalanceOverTimeText>
            <GraphText>
              Keeping up with your philanthropic impact has never been easier.
              Simply hover your cursor over the timeline to reveal account
              activities and balances
            </GraphText>
            <RangeButtonWrapper>
              <ViewRangeWrapper>
                View Range
                <RangeButton>1M</RangeButton>
                <RangeButton>3M</RangeButton>
                <RangeButton>6M</RangeButton>
                <RangeButton>1Y</RangeButton>
                <RangeButton>3Y</RangeButton>
                <RangeButton>5Y</RangeButton>
              </ViewRangeWrapper>
              <div>
                <FromToDate>
                  From <DateText>03/31/2016</DateText>
                </FromToDate>
                <FromToDate>
                  To <DateText>03/06/2019</DateText>
                </FromToDate>
              </div>
            </RangeButtonWrapper>
            <LineChart />
          </Dashboard>
          <WidthWrapper>
            <Dashboard>
              <InvestmentDate>September 05, 2018</InvestmentDate>
              <InvestmentTitle>Investment Allocation</InvestmentTitle>
              <GraphWithPortfolio>
                <DonutGraphWrapper>
                  <AssetText>Asset Mix</AssetText>
                  <DonutGraph/>
                  <ArrowRight />
                </DonutGraphWrapper>
                <PortfolioWrapper>
                  <InvestmentAllocation />
                  <InvestmentAllocation />
                  <InvestmentAllocation />
                </PortfolioWrapper>
              </GraphWithPortfolio>
            </Dashboard>
          </WidthWrapper>
          <Container>
            <ButtonWrapper>
              <ButtonComponent width={"570px"} val={"CREATE ANOTHER FUND"} />
              <ButtonComponent
                width={"570px"}
                val={"INVITE INTERESTED PARTIES"}
              />
            </ButtonWrapper>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}
