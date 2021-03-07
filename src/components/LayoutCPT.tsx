import React, { useState } from 'react'
import Footer from './FooterCPT'
import Header from './HeaderCPT'
import SideBar from "./SideBarCPT";

const Layout: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
