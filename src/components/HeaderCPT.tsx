import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import LogoJazbewor from '../../public/logo-p-full.png'
import { MobileIcon, Navbar, NavBtn, NavBtnLink, NavLink, NavMenu, NavLogo } from '../styles/pages/HeaderSTL'

const Header = (props) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  return (
    // <NavbarContainer>
      <Navbar scrollNav={scrollNav}>
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
          <Link href="/sign-in" passHref>
            <NavBtnLink>Entrar</NavBtnLink>
          </Link>
        </NavBtn>
      </Navbar>
    // </NavbarContainer>
  )
}

export default Header
