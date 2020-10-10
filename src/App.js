import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import reducer from './store/reducer/reducer';
import Loans from './containers/Loans/Loans';

const PageBody = styled.div`
  height: 100vh;
  background-color: #f5f5f5;
`;

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
  return (
    <Provider store={store}>
      <PageBody>
        <Loans />
      </PageBody>
    </Provider>

  );
}

export default App;
