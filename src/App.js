import React from 'react';
import styled from 'styled-components';

import Loans from './containers/Loans/Loans';

const PageBody = styled.div`
  height: 100vh;
  background-color: #f5f5f5;
`;

const App = () => {
  return (
    <PageBody>
      <Loans />
    </PageBody>
  );
}

export default App;
