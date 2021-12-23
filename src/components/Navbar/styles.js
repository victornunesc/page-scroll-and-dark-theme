import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (min-width: 961px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: none;

  @media screen and (min-width: 769px) {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: none;

  @media screen and (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`;

export const ThemeIconLight = styled(MdOutlineLightMode)`
  color: var(--color-primary-light);
`;

export const ThemeIconNight = styled(MdOutlineNightlight)`
  color: var(--color-primary-dark);
`;

export const NavBtnLink = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: ${({ theme }) => theme.backgroundColor};
  white-space: nowrap;
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.color};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
