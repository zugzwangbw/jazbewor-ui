import { useState } from 'react'
import FooterCPT from './FooterCPT'
import HeaderCPT from './HeaderCPT'
import SideBarCPT from './SideBarCPT'

function LayoutCPT({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <SideBarCPT isOpen={isOpen} toggle={toggle} />
      <HeaderCPT toggle={toggle} />
      {children}
      <FooterCPT />
    </>
  )
}

export default LayoutCPT
