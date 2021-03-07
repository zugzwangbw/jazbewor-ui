import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/LayoutCPT'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import React from 'react'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <title>Jazbewor</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
        <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
