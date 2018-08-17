import styled from 'styled-components';
import { MD_SIZE } from 'constants/deviceSizes';
import { padding } from 'constants/spacing';
import { white, lightGrey } from 'constants/colors';

const SearchFormWrapper = styled.div`
  height: 35px;
  width: 35px;
  padding: 0;
  display: flex;
  justify-content: flex-end;
`;

const SearchWrapper = styled.div`
  position: absolute;
  background-color: ${white};
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  padding: 0 ${padding} 0 ${padding};
  box-sizing: border-box;
  border-top: 1px solid ${lightGrey};
  border-bottom: 1px solid ${lightGrey};
  transition: all 0.35s ease;
  opacity: 0;
  visibility: hidden;
  ${({ isToggle }) => isToggle && `
    visibility: visible;
    opacity: 1;
    z-index: 2;
  `};
  @media only screen and (min-width: ${MD_SIZE}) {
    order: 1;
  }
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.875em;

  input[type="text"] {
    width: 170px;
    height: 35px;
    box-sizing: border-box;
    margin: 0px;
    border: none;
    border-bottom: 1px solid #bbb;
    outline: none;
    background: none;
  }

  @media only screen and (min-width: ${MD_SIZE}) {
    input[type="text"] {
      width: 300px;
    }
  }

  > div {
    margin: 0 10px 0 10px;
    height: 35px;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 85px;
    &:before {
      content: '';
      position: absolute;
      right: 10px;
      top: ${padding};
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 6px solid #555;
      transition: all 0.35s ease;
    }
  }
  
  select {
    position: relative;
    padding: 10px 0px 10px 15px;
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    border: 1px solid #bbb;
    border-radius: 2px;
    background: transparent;
    appearance: none;
    outline: none;
  }

  input[type="submit"] {
    text-indent: 1000px;
    height: 35px;
    width: 35px;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik01MDMuODY2LDQ3Ny45NzRMMzYwLjk1OCwzMzUuMDUyYzI4LjcyNS0zNC41NDQsNDYuMDE3LTc4LjkxMiw0Ni4wMTctMTI3LjMzNiAgYzAtMTEwLjA4NC04OS4yMjctMTk5LjMxMi0xOTkuMzEyLTE5OS4zMTJDOTcuNTk5LDguNDAzLDguMzUxLDk3LjYzMSw4LjM1MSwyMDcuNzE1YzAsMTEwLjA2NCw4OS4yNDgsMTk5LjMxMiwxOTkuMzEyLDE5OS4zMTIgIGM0OC40MzUsMCw5Mi43OTItMTcuMjkyLDEyNy4zMzYtNDYuMDE3bDE0Mi45MDgsMTQyLjkyMkw1MDMuODY2LDQ3Ny45NzR6IE0yOS4zMzEsMjA3LjcxNWMwLTk4LjMzNCw3OS45ODctMTc4LjMzMiwxNzguMzMyLTE3OC4zMzIgIGM5OC4zMjUsMCwxNzguMzMyLDc5Ljk5OCwxNzguMzMyLDE3OC4zMzJzLTgwLjAwNywxNzguMzMyLTE3OC4zMzIsMTc4LjMzMkMxMDkuMzE4LDM4Ni4wNDcsMjkuMzMxLDMwNi4wNSwyOS4zMzEsMjA3LjcxNXoiIGZpbGw9IiMzNzQwNEQiLz48L3N2Zz4=) no-repeat center;
    background-size:24px;
  }
`;

const CloseIcon = styled.span`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 15px;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.35s ease;

  :before {
    content: '';
    height: 20px;
    border-left: 2px solid black;
    position: absolute;
    transform: rotate(-45deg);
    left: 14px;
    top: 5px;
  }
  
  :after {
    content: '';
    height: 20px;
    border-left: 2px solid black;
    position: absolute;
    transform: rotate(45deg);
    left: 14px;
    top: 5px;
  }

  :hover {
    :before,
    :after {
      border-left: 2px solid red;
    }
  }
`;

const SearchIconToggle = styled.div`
  position: absolute;
  z-index: 1;
  transition: z-index 0.8s, width 0.5s, background 0.3s ease, border 0.3s;
  height: 35px;
  width: 35px;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  cursor: pointer;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik01MDMuODY2LDQ3Ny45NzRMMzYwLjk1OCwzMzUuMDUyYzI4LjcyNS0zNC41NDQsNDYuMDE3LTc4LjkxMiw0Ni4wMTctMTI3LjMzNiAgYzAtMTEwLjA4NC04OS4yMjctMTk5LjMxMi0xOTkuMzEyLTE5OS4zMTJDOTcuNTk5LDguNDAzLDguMzUxLDk3LjYzMSw4LjM1MSwyMDcuNzE1YzAsMTEwLjA2NCw4OS4yNDgsMTk5LjMxMiwxOTkuMzEyLDE5OS4zMTIgIGM0OC40MzUsMCw5Mi43OTItMTcuMjkyLDEyNy4zMzYtNDYuMDE3bDE0Mi45MDgsMTQyLjkyMkw1MDMuODY2LDQ3Ny45NzR6IE0yOS4zMzEsMjA3LjcxNWMwLTk4LjMzNCw3OS45ODctMTc4LjMzMiwxNzguMzMyLTE3OC4zMzIgIGM5OC4zMjUsMCwxNzguMzMyLDc5Ljk5OCwxNzguMzMyLDE3OC4zMzJzLTgwLjAwNywxNzguMzMyLTE3OC4zMzIsMTc4LjMzMkMxMDkuMzE4LDM4Ni4wNDcsMjkuMzMxLDMwNi4wNSwyOS4zMzEsMjA3LjcxNXoiIGZpbGw9IiMzNzQwNEQiLz48L3N2Zz4=) no-repeat center;
  background-size:24px;

  @media only screen and (min-width: ${MD_SIZE}) {
    order: 2;
  }
`;

export {
  SearchFormWrapper,
  SearchWrapper,
  SearchIconToggle,
  Form,
  CloseIcon,
};
