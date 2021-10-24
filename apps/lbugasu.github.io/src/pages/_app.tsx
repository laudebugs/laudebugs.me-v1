import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.css'
import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'

import Prism from '@theme-ui/prism'

const components = {
  // eslint-disable-next-line react/display-name
  pre: ({ children }) => <>{children}</>,
  code: Prism
}

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} components={components}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default CustomApp
