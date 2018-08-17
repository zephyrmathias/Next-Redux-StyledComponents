import styled from 'styled-components';
import {
  SM_SIZE,
  MD_SIZE,
  LG_SIZE,
  XL_SIZE,
} from 'constants/deviceSizes';
import { padding } from 'constants/spacing';

const getWidth = (span) => {
  const width = (span * 100.0) / 12.0;
  return `${width}%`;
};

const getPadding = (noPadding) => {
  if (noPadding === true) {
    return '0px';
  }
  return `0 ${padding} 0 ${padding}`;
};

const StyledColumn = styled.div`
  box-sizing: border-box;
  padding: ${({ noPadding }) => getPadding(noPadding)};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  width: ${({ xs }) => getWidth(xs)};
  
  @media only screen and (min-width: ${SM_SIZE}) {
    width: ${({ sm }) => getWidth(sm)};
  }

  @media only screen and (min-width: ${MD_SIZE}) {
    width: ${({ md }) => getWidth(md)};
  }

  @media only screen and (min-width: ${LG_SIZE}) {
    width: ${({ lg }) => getWidth(lg)};
  }

  @media only screen and (min-width: ${XL_SIZE}) {
    width: ${({ xl }) => getWidth(xl)};
  }
`;

export default StyledColumn;
