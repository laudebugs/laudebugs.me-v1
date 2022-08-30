/** @jsxImportSource theme-ui */
import Head from 'next/head'
import Prism from '@theme-ui/prism'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { fromEvent } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'
import { Progress, ThemeProvider } from 'theme-ui'
import { Provider } from 'react-redux'
import Footer from '../components/footer'
import Header from '../components/header'
import theme from '../styles/theme'
import './styles.scss'
import { store } from '@sandstorm/redux'
import { useIsBrowser } from '@sandstorm/hooks/useIsBrowser'
import { getLocalStorageItem } from '@sandstorm/helpers/localStorage'
import { appActions } from '@sandstorm/redux/store'

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

  const isBrowser = useIsBrowser()
  useEffect(() => {
    if (isBrowser) {
      appActions.setIsNpm((getLocalStorageItem<boolean>('isNpm') || !getLocalStorageItem<boolean>('isYarn')) ?? false)
    }
  }, [isBrowser])

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
    <Provider store={store}>
      <ThemeProvider theme={theme} components={components}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
        </Head>
        <div className="contentBody">
          <Progress sx={{ variant: 'containers.progressBar' }} className="progressBar" max={1} value={progress}>
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
    </Provider>
  )
}

export default CustomApp