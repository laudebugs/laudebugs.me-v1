/** @jsxImportSource theme-ui */

import Link from 'next/link'
import styles from './socials.module.scss'
import Twitter from './socials/twitter'
import Github from './socials/github'
import Instagram from './socials/instagram'
import LinkedIn from './socials/linkedin'
import { memo } from 'react'

function Socials({ close, isOpen }) {
  return (
    <div className={`${styles.sideNav} ${isOpen ? styles.opened : styles.closed}`}>
      <div onClick={() => close.next(!isOpen)} className={styles.shadow}></div>
      <div className={styles.menu}>
        <nav>
          <Link href="https://twitter.com/laudebugs" target="_blank" onClick={() => close.next(!isOpen)}>
            <Twitter />
          </Link>
          <Link href="https://www.instagram.com/laudebugs/" target="_blank" onClick={() => close.next(!isOpen)}>
            <Instagram />
          </Link>
          <Link href="https://www.linkedin.com/in/laurence-ininda/?_l=en_US" target="_blank" onClick={() => close.next(!isOpen)}>
            <LinkedIn />
          </Link>
          <Link href="https://github.com/laudebugs" target="_blank" onClick={() => close.next(!isOpen)}>
            <Github />
          </Link>
        </nav>
      </div>
    </div>
  )
}
export default memo(Socials)
