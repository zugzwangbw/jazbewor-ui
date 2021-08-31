import Link from 'next/link'
import React from 'react'
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SideBarLink,
  SideBarMenu,
  SideBarRoute,
  SideBarWrapper,
  SideBtnWrap
} from '../styles/pages/SideBarSTL'

const SideBar = ({ toggle, isOpen }) => {
  return (
    <SideBarContainer onClick={toggle} isOpen={isOpen}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <Link href="/" passHref>
            <SideBarLink>Início</SideBarLink>
          </Link>
          <Link href="/about" passHref>
            <SideBarLink>Sobre</SideBarLink>
          </Link>
          <Link href="/services" passHref>
            <SideBarLink>Serviços</SideBarLink>
          </Link>
          <Link href="/contact" passHref>
            <SideBarLink>Contato</SideBarLink>
          </Link>
        </SideBarMenu>
        <SideBtnWrap>
          <Link href="/log-in" passHref>
            <SideBarRoute>Entrar</SideBarRoute>
          </Link>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
