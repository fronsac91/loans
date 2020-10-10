import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import InvestForm from '../LoanModal/InvestForm';
import { convertSecIntoDays } from '../../utility/diffDates';
import { numberWithCommas } from '../../utility/numberWithCommas';

import styled from 'styled-components';

const Content = styled.div`
  text-align: left;
  margin: 0;
`;

const Header = styled.h2`
  margin: 0;
`;

const Title = styled.p`
  margin: 0;
  padding: 8px 0 16px 0;
`;

const Amount = styled.p`
  margin: 0;
`;

const Available = styled.p`
  margin: 0;
`;


const LoanEnds = styled.p`
  margin: 0;
`;

const LoanModal = ({loan, closeModal}) => {
  let modal =
    <Modal
      isVisible={loan ? true : false}
      closeModal={closeModal}
    >
      <Content>
        <Header>Invest in loan</Header>
        <Title>{loan.title}</Title>
        <Amount>Amount: £{numberWithCommas(loan.amount)}</Amount>
        <Available>Available: £{numberWithCommas(loan.available)}</Available>
        <LoanEnds>Loan ends in: {convertSecIntoDays(loan.term_remaining)}</LoanEnds>

        <InvestForm loan={loan} closeModal={closeModal}/>
      </Content>
    </Modal>

  return modal;
}

export default LoanModal;