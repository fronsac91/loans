import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import LoanCard from '../../components/LoanCard/LoanCard';
import LoanModal from '../../components/LoanModal/LoanModal';

import { numberWithCommas } from '../../utility/numberWithCommas';

const Container = styled.div`
  width: 500px;
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
  const [ selectedLoan, setSelectedLoan ] = useState(null);

  return (
    <Container>
      <Header>Current Loans</Header>

      {props.loans.map(loan => 
        <LoanCard
          loan={loan}
          key={loan.id}
          clicked={() => setSelectedLoan(loan)} />
      )}

      <Balance data-testid="balance">
        Total amount available for investments: <strong>£{numberWithCommas(props.balance)}</strong>
      </Balance>

      {selectedLoan
        ? <LoanModal
            loan={selectedLoan}
            closeModal={() => setSelectedLoan(null)}/>
        : null
      }
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
