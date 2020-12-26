import styled from 'styled-components'; 
import { FaTimes } from 'react-icons/fa'; 
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; 

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid; 
  align-items: center; 
  top: 0; 
  left: 0;
  transition: .3s ease-in-out; 
  opacity: ${({ isOpen }) => isOpen ? '100%' : '0'};
  top: ${({ isOpen }) => isOpen ? '0' : '-100%'};
  // ---for test--
  /* opacity: 100%;
  top: 0; */
  // ---for test---
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute; 
  top: 1.2rem;
  right: 1.5rem;
  background: transparent; 
  font-size: 2rem;
  cursor: pointer;
  outline: none; 
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid; 
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center; 

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px); 
  }
`;

export const SidebarLink = styled(ScrollLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none; 
  list-style: none; 
  transition: .2s ease-in-out; 
  cursor: pointer; 

  &:hover {
    color: #01bf71;
    transition: .2s ease-in-out; 
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center; 
`;
export const SidebarRoute = styled(RouterLink)`
  background: #01bf71;
  color: #010606;
  outline: none; 
  border: none; 
  cursor: pointer; 
  border-radius: 50px;
  font-size: 16px;
  padding: 16px 64px;
  transition: all .2s ease-in-out; 
  text-decoration: none; 

  &:hover {
    transition: all .2s ease-in-out; 
    background: #fff;
    color: #010606;
  }
`; 