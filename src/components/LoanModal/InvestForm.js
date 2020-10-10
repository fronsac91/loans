import React, { useState } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';

import * as actions from './../../store/actions';
import Button from '../../components/Button/Button';

const CtaContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const AmountInput = styled.input`
  width: 60%;
  margin-right: 12px;
  padding: 0 8px;
  text-align: right;
`;

const InvestForm = (props) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    const isEmpty = e.target.value === '';
    const isNumeric = /^[0-9\b]+$/.test(e.target.value);
    const isWithinBalance = e.target.value <= props.balance;
    const isWithinAvailable = e.target.value <= props.loan.available;

    if (isEmpty || ( isNumeric && isWithinBalance && isWithinAvailable)) {
      setValue(e.target.value);
    }
  }

  const investAmount = (event) => {
    event.preventDefault();
    props.investAmount(props.loan.id, parseInt(value));

    props.closeModal();
  }

  return (
    <form onSubmit={investAmount}>
      <p>Investment amount (£)</p>
  
      <CtaContainer>
        <AmountInput type="text" value={value} onChange={onChange} />
        <Button isSubmit={true}>INVEST</Button>
      </CtaContainer>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    balance: state.balance
  }
}

const mapDispatchToProps = dispatch => {
  return {
    investAmount: (loanId, amount) => dispatch(actions.investAmount(loanId, amount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestForm);