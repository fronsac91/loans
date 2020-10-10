import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../Button/Button';
import { numberWithCommas } from './../../utility/numberWithCommas';

const CardContainer = styled.div`
  position: relative;
  margin: 16px 0;
  padding: 12px;
  border: 2px solid #dcdcdc;
  background-color: white;
`;

const CardHeader = styled.h2`
  font-size: 16px;
  margin-top: 0;
`;

const CardBody = styled.div`
  display: flex;
`;

  const CardContentBox = styled.div`
    width: 70%;
  `;
  
    const LoanInfo = styled.p`
      margin: 0;
    `;
  
  const CardCtaBox = styled.div`
    width: 30%;
    align-self: flex-end;
  `;

    const InvestedLabel = styled.p`
      margin: 0;
      padding: 0 2px 12px 0;
      color: green;
      text-align: right;
    `;

const LoanCard = (props) => {
  const loan = props.history
    .filter(loan => loan.id === props.loan.id)[0];    
  const investedAmount = loan ? loan.amount : null;

  return (
    <CardContainer>
      <CardHeader>{props.loan.title}</CardHeader>
      <CardBody>
        <CardContentBox>
          <LoanInfo>Tranche: {props.loan.tranche}</LoanInfo>
          <LoanInfo>Annualized return: {props.loan.annualised_return}</LoanInfo>
          <LoanInfo>LTV: {props.loan.ltv}</LoanInfo>
        </CardContentBox>
  
        <CardCtaBox>
          {
            investedAmount > 0
            ? <InvestedLabel>Invested: £{numberWithCommas(investedAmount)}</InvestedLabel>
            : null
          }
          <Button data-testid="open-modal" clicked={props.clicked}>INVEST</Button>
        </CardCtaBox>
      </CardBody>
    </CardContainer>
  );
}

const mapStateToProps = state => {
  return {
    history: state.history
  };
};

export default connect(mapStateToProps)(LoanCard);