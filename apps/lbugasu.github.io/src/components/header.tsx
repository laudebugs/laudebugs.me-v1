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
  const isHomePage = !slug || path === '/changelog'

  return (
    <header className={styles.header}>
      <span className={styles.menuBtn}>
        <MenuButton open={false} />
      </span>
      <span>
        {isHomePage && (
          <span className={styles.centerNav}>
            <span className={`${path !== '/' && path !== '/changelog' ? styles.selected : styles.paths}`}>
              <Link href="/journal">
                <a className={`${path === '/journal' ? styles.selected_left : ''}`}>
                  <h3>journal</h3>
                </a>
              </Link>
              <Logo />
              <Link href="/dev">
                <a className={`${path === '/dev' ? styles.selected_right : ''}`}>
                  <h3>dev</h3>
                </a>
              </Link>
            </span>
          </span>
        )}
      </span>
      <span className={styles.homeBtn}>{!isHomePage ? <Logo /> : <div sx={{ width: '50px' }}></div>}</span>
    </header>
  )
}

export default Header
