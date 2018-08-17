import styled from 'styled-components';
import {
  MD_SIZE,
  LG_SIZE,
} from 'constants/deviceSizes';

const ArticlesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (min-width: ${MD_SIZE}) {
    > div:nth-child(even) figure {
      margin-right: 15px;
    }
    > div:nth-child(1n+3) figure {
      margin-left: 15px;
    }
  }

  @media only screen and (min-width: ${LG_SIZE}) {
    > div:nth-child(2) figure,
      div:nth-child(3n+2) figure {
        margin-left: 0px;
        margin-right: 15px;
    }
    > div:nth-child(3) figure,
      div:nth-child(3n+3) figure {
        margin-left: 15px;
        margin-right: 15px;
    }
    > div:nth-child(4) figure,
      div:nth-child(3n+4) figure {
        margin-left: 15px;
        margin-right: 15px;
    }
  }
`;

export default ArticlesList;
