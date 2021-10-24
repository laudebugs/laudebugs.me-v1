/** @jsxImportSource theme-ui */

import { AppProps } from 'next/app'

import './styles.css'
import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'

import Prism from '@theme-ui/prism'
import Header from '../components/header'
import { Progress } from 'theme-ui'
const components = {
  // eslint-disable-next-line react/display-name
  pre: ({ children }) => <>{children}</>,
  code: Prism
}

function CustomApp({ Component, pageProps }: AppProps) {
  const isHome = true
  return (
    <ThemeProvider theme={theme} components={components}>
      <Progress sx={{ variant: 'containers.progressBar' }} max={1} value={1 / 2}>
        50%
      </Progress>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default CustomApp
