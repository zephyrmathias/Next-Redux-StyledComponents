import React from 'react';
import Link from 'next/link';
import A from 'commons/A';
import {
  Nav,
  HamburgerIcon,
  Logo,
  Menu,
  MenuList,
  Backdrop,
  CloseNavbar,
} from './styles';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
    };
    this._onToggleNavbar = this._onToggleNavbar.bind(this);
  }

  _onToggleNavbar() {
    this.setState(prevState => ({
      isToggle: !prevState.isToggle,
    }));
  }

  render() {
    const { isToggle } = this.state;
    return (
      <Nav>
        <HamburgerIcon onClick={this._onToggleNavbar}>
          <div />
          <div />
          <div />
        </HamburgerIcon>
        <Link href="/">
          <A>
            <Logo
              srcSet="http://1000logos.net/wp-content/uploads/2017/04/Symbol-New-York-Times.png 125w,
                      http://1000logos.net/wp-content/uploads/2017/04/Symbol-New-York-Times.png 768w,
                      https://www.nytco.com/wp-content/themes/nytco/images/nytco/NYT-wordmark.png 1024w"
              sizes="(max-width: 576px) 125px,
                    (min-width: 768px) 800px,
                    1024px"
              src="http://1000logos.net/wp-content/uploads/2017/04/Symbol-New-York-Times.png"
              alt="New York Times Logo"
              height="45px"
            />
          </A>
        </Link>
        <Menu isToggle={isToggle}>
          <MenuList isToggle={isToggle}>
            <h1>Menu</h1>
            <Link href="/">
              <A>Home</A>
            </Link>
            <A href="https://www.nytimes.com/">New York Times</A>
            <CloseNavbar onClick={this._onToggleNavbar} />
          </MenuList>
          <Backdrop onClick={this._onToggleNavbar} />
        </Menu>
      </Nav>
    );
  }
}

export default Navbar;
