import React, { useEffect, useState } from 'react'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks, 
  NavBtn, 
  NavBtnLink, 
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'; 

const Navbar = ({
  toggle, 
}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav= () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/">
              dolla
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover">Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="signup">Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
