import styled from 'styled-components';
import { lightGrey, darkGrey } from 'constants/colors';
import { padding } from 'constants/spacing';

const Nav = styled.nav`
  height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 ${padding} 0 ${padding};
`;

const HamburgerIcon = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  > div {
    transition: all 0.35s ease;
    content: '';
    height: 4px;
    width: 80%;
    background: black;
    margin-bottom: 3px;
  }
  > div:nth-child(1) {
    margin-top: 9px;
  }
  > div:nth-child(2) {
    width: 65%;
  }
`;

const Logo = styled.img`
  position: absolute;
  margin: auto;
  top: 7.5px;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.35s ease;
  padding: ${padding};
  visibility: hidden;
  height: 100%;
  width: 100%;
  z-index: 99;
  opacity: 0;
  ${({ isToggle }) => isToggle && `
    opacity: 1;
    visibility: visible;
    position: fixed;
  `};
`;

const MenuList = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: #555;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  background: ${lightGrey};
  height: 100%;
  width: 200px;
  transform: translateX(-100%);
  padding: ${padding};
  transition: all 0.35s ease;

  ${({ isToggle }) => isToggle && `
    transform: translateX(0%);
  `};

  > h1 {
    color: black;
    margin-top: 0px;
  }
  > a {
    width: 150px;
    transition: all 0.35s ease;
    display: block;
    margin-bottom: 20px;
    border-bottom: 1px solid ${lightGrey};
  }
  > a:hover {
    color: black !important;
    border-bottom: 1px solid ${darkGrey};
  }
  > a:visited {
    color: #555;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: black;
  opacity: 0.8;
`;

const CloseNavbar = styled.span`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
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

export {
  Nav,
  HamburgerIcon,
  Logo,
  Menu,
  MenuList,
  Backdrop,
  CloseNavbar,
};
