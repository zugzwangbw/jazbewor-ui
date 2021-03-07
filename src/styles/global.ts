import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font: 400 16px Sora, sans-serif; */
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Sora, sans-serif;
  }

  aside {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.background};
    display: grid;
    align-items: center;
    top: ${( isOpen ) => (isOpen ? '0' : '-100%')};
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${( isOpen ) => (isOpen ? '100%' : '0')};
  }
`
