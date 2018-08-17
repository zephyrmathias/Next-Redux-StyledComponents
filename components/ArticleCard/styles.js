import styled from 'styled-components';
import { MD_SIZE } from 'constants/deviceSizes';
import { lightGrey, darkGrey } from 'constants/colors';
import { padding } from 'constants/spacing';

const Figure = styled.figure`
  box-sizing: border-box;
  margin: 0px;
  height: 100%;
  transition: all 0.35s ease;
  box-shadow: 3px 5px 19px -4px rgba(204,204,204,1);
  border-radius: 5px;
  overflow: hidden;

  :hover {
    box-shadow: 3px 5px 19px 0px rgba(170,170,170,1);
  }

  div h3 {
    font-family: 'Playfair Display';
  }

  picture {
    display: block;
    height: 150px;
  }

  picture source,
  picture img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media only screen and (min-width: ${MD_SIZE}) {
    picture {
      height: 250px;
    }

    ${({ first }) => first && `
      padding-bottom: ${padding};
      border-bottom: 1px solid ${lightGrey};
      box-shadow: 0px 0px 0px 0px rgba(204,204,204,1);
      border-radius: 0px;
      > a {
        display: flex !important;
      }
      picture {
        width: 55%;
        height: 500px;
      }
    `};
  }
`;

const TextSection = styled.div`
  padding: ${padding};
  position: relative;
  > div {
    margin-bottom: 7.5px;
    font-size: 0.75em;
    color: ${darkGrey};
    display: flex;
    justify-content: space-between;
    > span:nth-child(2) {
      text-align: right;
    }
  }
  > h3 {
    margin: 0 0 7.5px 0;
    font-family: 'Playfair Display';
  }
  > figcaption {
    font-size: 0.875em;
  }

  @media only screen and (min-width: ${MD_SIZE}) {
    ${({ first }) => first && `
      padding: 25px;
      width: 45%;
      > h3 {
        text-align: center;
        font-size: 2.25em;
        margin: 25px 0 25px 0;
        padding-bottom: 15px;
        border-bottom: 3px solid black;
      }
      > figcaption {
        font-family: 'Playfair Display';
        font-size: 1.25em;
      }
    `};
  }
`;

export { Figure, TextSection };
