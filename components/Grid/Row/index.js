import React from 'react';
import PropTypes from 'prop-types';
import StyledRow from './StyledRow';

const Row = ({ children, ...otherProps }) => (
  <StyledRow {...otherProps}>
    {children}
  </StyledRow>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
