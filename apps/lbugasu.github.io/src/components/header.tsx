/** @jsxImportSource theme-ui */

import MenuButton from '../components/menubutton'
import Logo from '../components/logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './header.module.scss'

const Header = () => {
  const router = useRouter()
  const path = router.pathname

  const { slug } = router.query
  const isHomePage = !slug

  return (
    <header sx={{ variant: 'containers.header' }}>
      <span>
        <MenuButton />
      </span>
      <span>
        {isHomePage && (
          <span sx={{ variant: 'containers.header.centerNav' }} className={`${path !== '/' ? styles.selected : styles.paths}`}>
            <Link href="/journal">
              <a className={`${path === '/journal' ? styles.selected_left : ''}`} href="/journal">
                <h3 sx={{ marginRight: '1.5em' }}>journal</h3>
              </a>
            </Link>
            <Logo />
            <Link href="/dev">
              <a className={`${path === '/dev' ? styles.selected_right : ''}`} href="/dev">
                <h3 sx={{ marginLeft: '1.5em' }}>dev</h3>
              </a>
            </Link>
          </span>
        )}
      </span>
      <span sx={{ variant: 'containers.stickMe' }}>{!isHomePage && <Logo />}</span>
    </header>
  )
}

export default Header
