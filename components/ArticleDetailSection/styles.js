import styled from 'styled-components';
import { padding } from 'constants/spacing';
import { darkGrey, black, white } from 'constants/colors';
import { MD_SIZE } from 'constants/deviceSizes';

const ArticleDetailTitle = styled.div`
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  height: 400px;
  background-position: center;
  background-size: cover;
  color: ${white};
  font-family: 'Playfair Display';
  ${({ backgroundImageUrl }) => `background-image: url(${backgroundImageUrl})`};

  > div {
    width: 100%;
    box-sizing: border-box;
    padding: ${padding};
    background-image: linear-gradient(to top, black 0%, transparent 100%);
  }

  > div h1 {
    font-size: 1.75em;
    margin: 0px;
  }

  @media only screen and (min-width: ${MD_SIZE}) { 
    > div h1 {
      font-size: 2.25em;
    }
  }
`;

const ArticleDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${padding};
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${darkGrey};

  ${({ primary }) => primary && `
    > div:nth-child(1) {
        color: ${black};
        font-weight: 800;
        font-size: 1.5em;
    }
    > div:nth-child(2) {
      font-size: 0.75em;
    }
  `};

  ${({ secondary }) => secondary && `
    font-size: 0.75em;
    text-align: right;
  `};
`;

const ArticleDetailContent = styled.div`
  padding: 0 ${padding};
  > p {
    margin: 0;
  }
  > span {
    padding-top: ${padding};
    font-size: 0.75em;
    color: ${darkGrey};
  }
`;

const ReadMore = styled.div`
  text-align: right;
  font-size: 0.875em;
  padding: ${padding};
  a {
    color: ${darkGrey};
    transition: all 0.35s ease;
  }
  a:hover {
    color: ${black};
  }
`;

export {
  ArticleDetailTitle,
  ArticleDetailHeader,
  HeaderText,
  ArticleDetailContent,
  ReadMore,
};
