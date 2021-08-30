import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ThemeProvider } from 'theme-ui';
import theme from "../styles/theme"

function CustomApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Lau de Bugs</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}

      </Head>
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img src="/nx-logo-white.svg" alt="Nx logo" width="75" height="50" />
          <h1>Welcome to lbugasu.github.io!</h1> */}
        </header>
        <main>
          <ThemeProvider theme={theme} >

            <Component {...pageProps} />

          </ThemeProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
