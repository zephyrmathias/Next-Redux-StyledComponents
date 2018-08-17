import React from 'react';
import styled from 'styled-components';
import { padding } from 'constants/spacing';
import App from '../App';

const StyledError = styled.div`
  font-family: 'Playfair Display';
  box-sizing: border-box;
  padding: ${padding};
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 1.85em;
    margin: 0;
  }
`;

const Error = () => (
  <App>
    <StyledError>
      <h1>
        Oops, Something Went Wrong
      </h1>
    </StyledError>
  </App>
);

export default Error;
