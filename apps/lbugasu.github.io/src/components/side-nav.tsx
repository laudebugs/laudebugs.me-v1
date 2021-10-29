/** @jsxImportSource theme-ui */

import Link from 'next/link'
import styles from './side-nav.module.scss'
function SideNav({ close, isOpen }) {
  return (
    <div sx={{ display: !isOpen ? 'none' : 'block' }}>
      <div className={styles.sideNav}>
        <div className={styles.menu}>
          <nav>
            <Link href="/dev">
              <a onClick={() => close.next(!isOpen)}> - developer notes</a>
            </Link>
            <Link href="/journal">
              <a onClick={() => close.next(!isOpen)}>- journal</a>
            </Link>
            <a className={styles.undone}> - listenings</a>
            <a className={styles.undone}> - old stuff</a>
          </nav>
        </div>
        <div onClick={() => close.next(!isOpen)} className={styles.shadow}></div>
      </div>
    </div>
  )
}

export default SideNav
