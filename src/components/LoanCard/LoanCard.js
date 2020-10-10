import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';

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

const LoanCard = (props) => {
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
          <Button clicked={props.clicked}>INVEST</Button>
        </CardCtaBox>
      </CardBody>
    </CardContainer>
  );
}

export default LoanCard;