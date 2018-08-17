
import styled from 'styled-components';
import {
  SM_SIZE,
  MD_SIZE,
  LG_SIZE,
  XL_SIZE,
} from 'constants/deviceSizes';

const getWidth = (span) => {
  const width = (span / 12) * 100;
  return `${width}%`;
};

const StyledMainLayout = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor};
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

export default StyledMainLayout;
