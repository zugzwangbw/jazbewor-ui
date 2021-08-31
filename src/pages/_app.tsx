import { ThemeProvider } from 'styled-components'
import Layout from '../components/LayoutCPT'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import React from 'react'
import Head from 'next/head'
import AuthProvider from '@/contexts/AuthContext'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <title>Jazbewor</title>
        </Head>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
