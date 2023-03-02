/** @jsxImportSource theme-ui */
import { Pre } from '@laudebugs/common/components'
import { useIsBrowser } from '@laudebugs/common/hooks'
import { getLocalStorageItem } from '@laudebugs/utils'
import Prism from '@theme-ui/prism'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { fromEvent } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'
import { Progress, ThemeProvider } from 'theme-ui'
import Footer from '../components/footer'
import Header from '../components/header'
import { store } from '../redux'
import { appActions } from '../redux/store'
import { theme } from '../styles/theme'
import './styles.scss'

import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'

const components = {
  // eslint-disable-next-line react/display-name
  // pre: Pre, //({ children }) => <Pre>{children}</Pre>,
  pre: ({ children }) => <Pre>{children}</Pre>,
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

  const componentsWithStyles = useThemedStylesWithMdx(useMDXComponents(components))

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MDXProvider components={componentsWithStyles}>
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
        </MDXProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default CustomApp
