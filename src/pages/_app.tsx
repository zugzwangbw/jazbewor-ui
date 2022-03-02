import { AuthProvider } from '@/hooks/userAuth'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import LayoutCPT from '../components/LayoutCPT'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
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
