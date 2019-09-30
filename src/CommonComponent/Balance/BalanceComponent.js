import React from 'react'
import {Amount,AmountText,AmountWrapper,ViewRedirect,Tooltip,TooltipText,Arrow} from './style';
import { connect } from 'react-redux';

export function BalanceComponent(props) {
    return (
        <AmountWrapper>
            <AmountText>Current Balance</AmountText>
            <Tooltip className="fa fa-info-circle"><TooltipText>Hai i am parthiban.How are you?</TooltipText></Tooltip>
            <Amount>{props.a}</Amount>
            <ViewRedirect visible={props.redirect} href="#">VIEW TRANSACTION SUMMARY<Arrow>&#10142;</Arrow></ViewRedirect>
        </AmountWrapper>
    )
}
const mapStateToProps = state => ({
    a: state.getIn(["Amount"])
  });
  
  export default connect(mapStateToProps)(BalanceComponent);