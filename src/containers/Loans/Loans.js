import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import LoanCard from '../../components/LoanCard/LoanCard';

import { numberWithCommas } from '../../utility/numberWithCommas';

const Container = styled.div`
  width: 400px;
  margin: auto;
  color: #333d45;
`;

const Header = styled.h1`
  margin: 0;
`;

const Balance = styled.p`
  text-align: center;
`;

const Loans = (props) => {
  return (
    <Container>
      <Header>Current Loans</Header>

      {props.loans.map(loan => 
        <LoanCard loan={loan} key={loan.id} />
      )}

      <Balance data-testid="balance">
        Total amount available for investments: <strong>£{numberWithCommas(props.balance)}</strong>
      </Balance>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    loans: state.loans,
    balance: state.balance
  };
};

export default connect(mapStateToProps)(Loans);
