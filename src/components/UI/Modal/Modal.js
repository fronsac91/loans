import React, { Fragment } from 'react';
import styled from 'styled-components';

import Backdrop from '../Backdrop/Backdrop';

const StyledModal = styled.button`
  position: fixed;
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 30%;

  box-sizing: border-box;
  padding: 16px;
  width: 300px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;

  z-index: 500;
  background-color: #f5f5f5;
  color: #333d45;

  transition: all 0.3s ease-out;
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(-100vh)'};
  opacity: ${props => props.isVisible ? '1' : '0'};
`;

const modal = props => {
  return (
    <Fragment>
      <Backdrop isVisible={props.isVisible} closeModal={props.closeModal} />
      <StyledModal isVisible={props.isVisible}>
        {props.children}
      </StyledModal>
    </Fragment>
  );
}

export default React.memo(
  modal,
  (prevProps, nextProps) =>
    nextProps.isVisible === prevProps.isVisible &&
    nextProps.children === prevProps.children
);
