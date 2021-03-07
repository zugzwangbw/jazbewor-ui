import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import LogoJazbewor from '../../public/logo-p-full.png'
import { MobileIcon, Nav, NavBtn, NavBtnLink, NavLink, NavMenu, NavLogo } from '../styles/pages/HeaderSTL'

const Header = (props) => {
  return (
    <>
      <Nav>
        <Link href="/" passHref>
          <NavLink>
            <NavLogo>
              Jazbewor
            </NavLogo>
          </NavLink>
        </Link>
        <MobileIcon onClick={props.toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <Link href="/" passHref>
            <NavLink>Início</NavLink>
          </Link>
          <Link href="/about" passHref>
            <NavLink>Sobre</NavLink>
          </Link>
          <Link href="/services" passHref>
            <NavLink>Serviços</NavLink>
          </Link>
          <Link href="/contact" passHref>
            <NavLink>Contato</NavLink>
          </Link>
        </NavMenu>
        <NavBtn>
          <Link href="/signin" passHref>
            <NavBtnLink>Entrar</NavBtnLink>
          </Link>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Header
