import React from 'react';
import styled from 'styled-components';
import Row from 'components/Grid/Row';
import Column from 'components/Grid/Column';
import { padding } from 'constants/spacing';
import { lightGrey, darkGrey } from 'constants/colors';

const StyledFooter = styled.div`
  font-size: 0.75em;
  color: ${darkGrey};
  padding: ${padding};
  background: ${lightGrey};
`;

const Footer = () => (
  <Row>
    <Column noPadding>
      <StyledFooter>
        © 2018 The New York Times Company
      </StyledFooter>
    </Column>
  </Row>
);

export default Footer;
