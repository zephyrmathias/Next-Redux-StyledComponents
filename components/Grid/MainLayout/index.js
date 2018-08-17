import React from 'react';
import PropTypes from 'prop-types';
import StyledMainLayout from './StyledMainLayout';

const MainLayout = ({ children, ...otherProps }) => (
  <StyledMainLayout {...otherProps}>
    {children}
  </StyledMainLayout>
);

MainLayout.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
};

MainLayout.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 10,
  xl: 10,
};

export default MainLayout;
