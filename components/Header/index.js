import React from 'react';
import styled from 'styled-components';
import { padding } from 'constants/spacing';
import { MD_SIZE } from 'constants/deviceSizes';
import Row from 'components/Grid/Row';
import Column from 'components/Grid/Column';

const StyledHeader = styled.header`
  box-sizing: border-box;
  height: auto;
  padding: ${padding} 0 ${padding} 0;
`;

const HeaderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-family: 'Playfair Display';
  text-justify: inter-word;
  padding: 0 ${padding} 0 ${padding};
  h2, p {
    margin: 0 0 2.5px 0;
  }
  h2 {
    letter-spacing: 2px;
  }
  p {
    color: #777;
    font-size: 0.875em;
  }
  @media only screen and (min-width: ${MD_SIZE}) {
    height: 80px;
    text-align: center;
  }
`;

const HeaderImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || '325px'};
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* eslint-disable */
const Header = () => (
  <Row>
    <Column noPadding>
      <StyledHeader>
        <HeaderImage height="400px">
          <img
            src="https://ei.marketwatch.com/Multimedia/2016/11/16/Photos/ZH/MW-FA325_NYTime_20161116103518_ZH.jpg?uuid=47051df4-ac12-11e6-ad2a-001cc448aede"
            alt="Old man's reading newspaper image"
          />
        </HeaderImage>
        <HeaderText>
          <div>
            <h2>An American Newspaper</h2>
            <p>
              The New York Times, based in New York City - since September 18, 1851
            </p>
          </div>
        </HeaderText>
        <HeaderImage height="325px">
          <img
            src="http://www.niemanlab.org/images/nytimes-print-newspaper-cc-990x500.jpg"
            alt="An American Newspaper image"
          />
        </HeaderImage>
      </StyledHeader>
    </Column>
  </Row>
);

export default Header;
