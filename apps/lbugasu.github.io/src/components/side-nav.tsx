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
            <Link href="/dev">
              <a onClick={() => close.next(!isOpen)}> - developer notes</a>
            </Link>
            <Link href="/journal">
              <a onClick={() => close.next(!isOpen)}>- journal</a>
            </Link>
            <Link href="/fragments">
              <a onClick={() => close.next(!isOpen)}>
                - fragments{' '}
                <span className="verySpecialChar" style={{ color: 'var(--theme-ui-colors-accent)', fontSize: '1.5rem' }}>
                  G
                </span>
              </a>
            </Link>
            <a className={styles.undone}> - listenings</a>
            <a className={styles.undone}> - old stuff</a>
          </nav>
          <AboutButton onClick={() => close.next(!isOpen)} />
        </div>
        <div onClick={() => close.next(!isOpen)} className={styles.shadow}></div>
      </div>
    </div>
  )
}

export default SideNav
