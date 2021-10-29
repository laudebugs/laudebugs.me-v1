/** @jsxImportSource theme-ui */

import MenuButton from '../components/menubutton'
import Logo from '../components/logo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './header.module.scss'
import { useEffect } from 'react'
import { useColorMode } from 'theme-ui'

const Header = () => {
  const router = useRouter()
  const path = router.pathname
  const { slug } = router.query
  const isHomePage = !slug || path === '/changelog'

  const [colorMode, setColorMode] = useColorMode()

  useEffect(() => {
    const colorMode = localStorage.getItem('colorMode')
    if (colorMode) setColorMode(colorMode)
    else setColorMode('light')
  }, [])

  function changeColorMode() {
    if (colorMode === 'light') setColorMode('dark')
    else setColorMode('light')
    localStorage.setItem('colorMode', colorMode)
  }

  return (
    <header className={styles.header}>
      <span className={styles.menuBtn}>
        <MenuButton open={false} />
      </span>
      <span>
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
