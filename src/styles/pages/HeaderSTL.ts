import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
interface NavbarProps { scrollNav: Boolean }

export const Navbar = styled.nav<NavbarProps>`
  /* background: radial-gradient(circle, rgba(49,28,93,1) 0%, rgba(16,21,34,1) 100%); */
  background: ${({ scrollNav }) => (scrollNav ? "transparent": "radial-gradient(circle, rgba(49,28,93,1) 0%, rgba(16,21,34,1) 100%)" )};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const MobileIcon = styled(FaBars)`
  display: none;
  color:  ${props => props.theme.colors.white};

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavLink = styled.div`
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: ${props => props.theme.colors.blue};
  }
`

export const NavLogo = styled.div`
  color: ${props => props.theme.colors.white};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 5px;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled.a`
  border-radius: 4px;
  background: ${props => props.theme.colors.blue};
  padding: 10px 22px;
  color: ${props => props.theme.colors.white};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.background};
  }
`
