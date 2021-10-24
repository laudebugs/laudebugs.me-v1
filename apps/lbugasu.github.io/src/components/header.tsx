/** @jsxImportSource theme-ui */

import MenuButton from '../components/menubutton'
import Logo from '../components/logo'

const Header = ({ isHomePage }) => {
  return (
    <header sx={{ variant: 'containers.header' }}>
      <span>
        <MenuButton />
      </span>
      <span>
        {isHomePage && (
          <span sx={{ variant: 'containers.header.centerNav' }}>
            <h3 sx={{ marginRight: '1.5em' }}>journal</h3>
            <Logo />
            <h3 sx={{ marginLeft: '1.5em' }}>dev</h3>
          </span>
        )}
      </span>
      <span>{!isHomePage && <Logo />}</span>
    </header>
  )
}

export default Header
