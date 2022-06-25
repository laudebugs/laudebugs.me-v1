/** @jsxImportSource theme-ui */

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useColorMode } from 'theme-ui'
import Logo from './logo'
import MenuButton from './menuButton/menubutton'
import styles from './header.module.scss'

const Header = () => {
  const router = useRouter()
  const path = router.pathname
  const { slug } = router.query
  const isHomePage = !slug || path === '/changelog'

  const [colorMode, setColorMode] = useColorMode()

  function changeColorMode() {
    if (colorMode === 'light') setColorMode('dark')
    else setColorMode('light')
  }

  return (
    <header className={styles.header}>
      <span className={styles.menuBtn}>
        <MenuButton open={false} />
      </span>
      <span>
        <span className={styles.centerNav}>
          <Link href="/">
            <a>
              <h2> Lau de Bugs</h2>
            </a>
          </Link>
          <span className={`${path !== '/' && path !== '/changelog' ? styles.selected : styles.paths}`}>
            <Link href="/journal">
              <a className={`${path === '/journal' ? styles.selected_left : ''}`}>
                <h4 className={styles.link}>journal</h4>
              </a>
            </Link>
            <Logo />
            <Link href="/dev">
              <a className={`${path === '/dev' ? styles.selected_right : ''}`}>
                <h4 className={styles.link}>dev</h4>
              </a>
            </Link>
          </span>
        </span>
      </span>
      <span className={styles.colorModeToggle}>
        <span className="specialChar" onClick={() => changeColorMode()}>
          {colorMode === 'light' ? 3 : 1}
        </span>
      </span>
    </header>
  )
}

export default Header
