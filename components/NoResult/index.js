import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { padding } from 'constants/spacing';

const StyledNoResult = styled.div`
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

const NoResult = ({ text }) => (
  <StyledNoResult>
    <div>
      <h1>
        Too Bad,
        There&apos;s No Results for {text}
      </h1>
    </div>
  </StyledNoResult>
);

NoResult.propTypes = {
  text: PropTypes.string,
};

NoResult.defaultProps = {
  text: "What You're Looking for",
};

export default NoResult;
