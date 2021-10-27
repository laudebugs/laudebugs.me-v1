/** @jsxImportSource theme-ui */

import { AppProps } from 'next/app'

import './styles.css'
import { ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'
import Prism from '@theme-ui/prism'

import Header from '../components/header'
import Footer from '../components/footer'
import { Progress } from 'theme-ui'
import { fromEvent } from 'rxjs'
import { distinctUntilChanged, map, tap } from 'rxjs/operators'
import { useEffect, useState } from 'react'
const components = {
  // eslint-disable-next-line react/display-name
  pre: ({ children }) => <>{children}</>,
  code: Prism
}

function CustomApp({ Component, pageProps }: AppProps) {
  const isHome = true
  const [progress, setProgress] = useState(0)
  function calculateScrollPercent(scrollTop, scrollHeight, clientHeight) {
    return Math.floor((scrollTop / (scrollHeight - clientHeight)) * 10000) / 10000
  }
  useEffect(() => {
    const scroll$ = fromEvent(document, 'scroll')
    const progress$ = scroll$.pipe(
      map((event: Event) => {
        const clientHeight = window.document.body.clientHeight
        const scrollTop = window.pageYOffset
        const scrollHeight = window.document.body.scrollHeight
        return { scrollTop, scrollHeight, clientHeight }
      }),
      map(({ scrollTop, scrollHeight, clientHeight }) => calculateScrollPercent(scrollTop, scrollHeight, clientHeight)),
      distinctUntilChanged()
    )

    progress$.subscribe(progress => {
      setProgress(progress)
    })
  }, [])

  return (
    <ThemeProvider theme={theme} components={components}>
      <div className="contentBody">
        <Progress sx={{ variant: 'containers.progressBar' }} max={1} value={progress}>
          {progress * 100}%
        </Progress>
        <span className="content">
          <Header />
          <Component {...pageProps} />
        </span>
      </div>
      <span className="footer">
        <Footer />
      </span>
    </ThemeProvider>
  )
}

export default CustomApp
