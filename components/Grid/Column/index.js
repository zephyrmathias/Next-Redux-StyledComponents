import React from 'react';
import PropTypes from 'prop-types';
import StyledColumn from './StyledColumn';

const Column = ({ children, ...otherProps }) => (
  <StyledColumn {...otherProps}>
    {children}
  </StyledColumn>
);

Column.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  noPadding: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
};

Column.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  noPadding: false,
};

export default Column;
