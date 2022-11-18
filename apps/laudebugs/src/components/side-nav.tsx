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
              - fragments{' '}
              <span className="verySpecialChar" style={{ color: 'var(--theme-ui-colors-accent)', fontSize: '1.5rem' }}>
                Ρ
              </span>
            </Link>
            <Link href="/cuisine" className={styles.undone}>
              {' '}
              - cuisine <small>[coming soon]</small>
            </Link>
            <Link href="listenings" className={styles.undone}>
              {' '}
              - listenings <small>[coming soon]</small>
            </Link>
            <Link href={'old-stuff'} className={styles.undone}>
              {' '}
              - old stuff
            </Link>
          </nav>
          <AboutButton onClick={() => close.next(!isOpen)} />
        </div>
        <div onClick={() => close.next(!isOpen)} className={styles.shadow}></div>
      </div>
    </div>
  )
}

export default SideNav
