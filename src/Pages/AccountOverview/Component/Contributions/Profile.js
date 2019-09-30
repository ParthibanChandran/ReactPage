import React from "react";
import {
  Details,
  SharesDetailWrapper,
  ValueTitle,
  Value,
  GiftText,
  DescribeText,
  ActivityWrapper
} from "./style";
import {ViewRedirect,Arrow} from '../../../../CommonComponent/Balance/style';
import { connect } from "react-redux";

export function Profile(props) {
  let list = props.a.toArray();
  console.log(list);
  return (
    <React.Fragment>
      {list.map(value => {
        return (
          <div>
            <GiftText href="#">Gift ID: {value.toObject()["Gift_id"]}</GiftText>
            <DescribeText>{value.toObject()["Describe"]}</DescribeText>
            <SharesDetailWrapper>
              <Details>
                <ValueTitle>Entered Date</ValueTitle>
                <Value>{value.toObject()["Entered_date"]}</Value>
              </Details>
              <Details>
                <ValueTitle>Received Date</ValueTitle>
                <Value>{value.toObject()["Received_date"]}</Value>
              </Details>
              <Details>
                <ValueTitle>Number of Shares</ValueTitle>
                <Value>{value.toObject()["Number_of_shares"]}</Value>
              </Details>
              <Details>
                <ValueTitle>Type</ValueTitle>
                <Value>{value.toObject()["Type"]}</Value>
              </Details>
              <Details>
                <ValueTitle>Amount</ValueTitle>
                <Value>{value.toObject()["Amount"]}</Value>
              </Details>
              <Details>
                <ValueTitle>Status</ValueTitle>
                <Value>{value.toObject()["Status"]}</Value>
              </Details>
            </SharesDetailWrapper>
            <ActivityWrapper>
            <ViewRedirect visible={true} href="#">VIEW CONTRIBUTION ACTIVITY<Arrow>&#10142;</Arrow></ViewRedirect>
            </ActivityWrapper>
          </div>
        );
      })}
    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  a: state.getIn(["Dashboard"])
});

export default connect(mapStateToProps)(Profile);
