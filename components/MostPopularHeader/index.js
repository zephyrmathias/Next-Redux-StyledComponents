import styled from 'styled-components';
import { padding } from 'constants/spacing';
import { MD_SIZE } from 'constants/deviceSizes';
import { lightGrey } from 'constants/colors';

const MostPopularHeader = styled.div`
  font-family: 'Playfair Display';
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${padding};
  
  @media only screen and (min-width: ${MD_SIZE}) {
    padding-bottom: ${padding};
    border-bottom: 1px solid ${lightGrey};
  }

  > h1 {
    margin: 0;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

export default MostPopularHeader;
