/** @jsxImportSource theme-ui */

import { AppProps } from 'next/app'

import './styles.css'
import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'

import Prism from '@theme-ui/prism'
import Header from '../components/header'
const components = {
  // eslint-disable-next-line react/display-name
  pre: ({ children }) => <>{children}</>,
  code: Prism
}

function CustomApp({ Component, pageProps }: AppProps) {
  const isHome = true
  return (
    <ThemeProvider theme={theme} components={components}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default CustomApp
