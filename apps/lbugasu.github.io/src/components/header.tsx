/** @jsxImportSource theme-ui */

import Logo from '../components/logo';
const Header = ({ pageProps }) => {
  return (
    <header sx={{ variant: 'containers.header' }}>
      <h2 sx={{ marginRight: '1.5em' }}>journal</h2>
      <Logo {...pageProps} />
      <h2 sx={{ marginLeft: '1.5em' }}>dev</h2>
    </header>
  );
};

export default Header;
