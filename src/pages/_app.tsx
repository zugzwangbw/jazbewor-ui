import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import LayoutCPT from '../components/LayoutCPT'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import AuthProvider from '../contexts/AuthContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutCPT>
        <Head>
          <title>Jazbewor</title>
        </Head>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </LayoutCPT>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
