import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  margin: auto;
  color: #333d45;
`;

const Header = styled.h1`
  margin: 0;
`;

const Loans = (props) => {
  return (
    <Container>
      <Header>Current Loans</Header>
    </Container>
  );
}


export default Loans;
