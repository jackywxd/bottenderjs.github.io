import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';

import media from '../css/media';
import MobileMenuOpenIcon from '../assets/mobile-menu-open.svg';
import MobileMenuCloseIcon from '../assets/mobile-menu-close.svg';

import NavItem from './NavItem';
import Sidebar from './Sidebar';

const Container = styled.div`
  display: none;

  @media (${media.tablet}) {
    display: flex;
    margin: 0;
    cursor: pointer;
  }
`;

const MobileMenuButton = styled.a`
  width: 26px;
  height: 26px;
  background-image: url(${prop => prop.image});
  background-position: center;
  background-repeat: no-repeat;
`;

const NavItemWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: solid 1px #d2d2d2;
  text-align: center;
`;

const menuStyle = {
  bmBurgerButton: {
    display: 'none',
  },
  bmCrossButton: {
    display: 'none',
  },
  bmMenu: {
    background: '#fafafa',
  },
  bmMenuWrap: {
    top: 80,
    width: '100%',
    height: 'auto',
    maxHeight: '100%',
    overflowY: 'scroll',
  },
  bmItemList: {
    display: 'flex',
    padding: 40,
    flexDirection: 'column',
  },
};

class MobileMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    document.documentElement.style.overflow = this.state.isOpen
      ? 'auto'
      : 'hidden';
    document.documentElement.style.height = this.state.isOpen ? 'auto' : '100%';
    document.body.style.overflow = document.documentElement.style.overflow;
    document.body.style.height = document.documentElement.style.height;

    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Container>
        <MobileMenuButton
          onClick={this.toggleMenu}
          image={isOpen ? MobileMenuCloseIcon : MobileMenuOpenIcon}
        />
        <Menu isOpen={isOpen} right styles={menuStyle} noOverlay>
          <NavItemWrapper>
            <NavItem
              title="docs"
              to="/docs/GettingStarted"
              onClick={this.toggleMenu}
              hasHover={false}
            />
            <NavItem title="blog" to="/blog" hasHover={false} />
            <NavItem
              title="github"
              to="https://github.com/Yoctol/bottender"
              hasHover={false}
            />
          </NavItemWrapper>
          <Sidebar {...this.props} toggleMenu={this.toggleMenu} />
        </Menu>
      </Container>
    );
  }
}

export default MobileMenu;
