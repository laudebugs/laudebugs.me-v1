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
          <Link href="https://twitter.com/lbugasu">
            <a target="_blank" onClick={() => close.next(!isOpen)}>
              <Twitter />
            </a>
          </Link>
          <Link href="https://www.instagram.com/laudebugs/">
            <a target="_blank" onClick={() => close.next(!isOpen)}>
              <Instagram />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/laurence-ininda/?_l=en_US">
            <a target="_blank" onClick={() => close.next(!isOpen)}>
              <LinkedIn />
            </a>
          </Link>
          <Link href="https://github.com/lbugasu">
            <a target="_blank" onClick={() => close.next(!isOpen)}>
              <Github />
            </a>
          </Link>
        </nav>
      </div>
    </div>
  )
}
export default memo(Socials)
