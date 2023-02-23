/** @jsxImportSource theme-ui */

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AboutButton } from './buttons/aboutButton/aboutButton'
import styles from './side-nav.module.scss'

function SideNav({ close, isOpen }) {
  const [display, setDisplay] = useState('none')

  useEffect(() => {
    if (!isOpen) setTimeout(() => setDisplay('none'), 500)
    else setDisplay('block')
  }, [isOpen])

  return (
    <div sx={{ display }}>
      <div className={styles.sideNav + ' ' + (isOpen ? styles.open : styles.close)}>
        <div className={styles.menu}>
          <nav>
            <Link href="/dev" onClick={() => close.next(!isOpen)}>
              - developer notes
            </Link>
            <Link href="/journal" onClick={() => close.next(!isOpen)}>
              - journal
            </Link>
            <Link href="/fragments" onClick={() => close.next(!isOpen)}>
              - fragments
            </Link>
            <Link href="https://laudebugs.notion.site/Cookbook-5ab1fcaccd22416dbd7c873b1af5fe8c" target="__blank">
              <span className={styles.iconLink}>
                - cook book <span className="material-icons-outlined">open_in_new</span>
              </span>
            </Link>
            <span className={styles.undone}>
              {' '}
              - listenings <small>[coming soon]</small>
            </span>
            <span className={styles.undone}> - old stuff</span>
          </nav>
          <AboutButton onClick={() => close.next(!isOpen)} />
        </div>
        <div onClick={() => close.next(!isOpen)} className={styles.shadow}></div>
      </div>
    </div>
  )
}

export default SideNav
