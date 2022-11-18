/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Subject } from 'rxjs'
import packageJson from '../../../../package.json'
import { useState } from 'react'
import styles from './footer.module.scss'
import Socials from './socials'

const Footer = className => {
  const { name, version } = packageJson

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = open => setIsOpen(open)

  const close = new Subject()
  close.subscribe(isOpen => toggleDrawer(isOpen))

  return (
    <footer>
      <div className={styles.footer}>
        <span>
          <Link href="/api/feed/rss" target={'_blank'}>
            <span className="material-icons-outlined">rss_feed</span>
          </Link>
        </span>
        <nav>
          <span className={styles.link} onClick={() => toggleDrawer(!isOpen)}>
            socials
          </span>
          <span>&nbsp;―&nbsp;</span>
          <Link href="/stats">
            <span className={styles.link}>stats</span>
          </Link>
        </nav>
        <small>
          <Link href="/changelog" sx={{ variant: 'containers.link' }}>
            <h6>{`v${version}`}</h6>
          </Link>
        </small>
      </div>
      <Socials close={close} isOpen={isOpen}></Socials>
    </footer>
  )
}

export default Footer
