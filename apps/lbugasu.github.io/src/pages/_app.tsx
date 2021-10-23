import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ThemeProvider } from 'theme-ui';
import theme from "../styles/theme"

function CustomApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
