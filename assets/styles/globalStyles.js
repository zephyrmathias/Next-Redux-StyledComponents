import { injectGlobal } from 'styled-components';
import { lightGrey } from '../../constants/colors';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: ${lightGrey};
  }

  body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;
