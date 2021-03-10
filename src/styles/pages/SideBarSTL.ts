import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
interface SideBarContainerProps { isOpen: Boolean }

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SideBarContainer = styled.aside<SideBarContainerProps>`
  background: ${props => props.theme.colors.background};
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: ${props => props.theme.colors.white};;
`

export const SideBarWrapper = styled.div`
  color: ${props => props.theme.colors.white};
`

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }

  @media screen and (max-width: 823px) and (max-height: 411px) {
    grid-template-rows: repeat(6, 40px);
  }

`

export const SideBarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.blue};
    transition: 0.2s ease-in-out;
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SideBarRoute = styled.a`
  border-radius: 6px;
  background: ${props => props.theme.colors.blueDark};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.background};
  }
`
