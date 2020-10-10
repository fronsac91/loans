import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  right: 16px;
  padding: 12px 28px;
  border: 2px solid #f3df00;
  background-color: #ffea00;
  cursor: pointer;

  &:hover {
    background-color: #f3df00;
  }
`;

const Button = (props) => (
  <StyledButton>INVEST</StyledButton>
);

export default Button;