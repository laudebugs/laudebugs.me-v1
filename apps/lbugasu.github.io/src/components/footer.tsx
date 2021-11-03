/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Subject } from 'rxjs'
import packageJson from 'package.json'
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
        <span />
        <nav>
          <span className={styles.link} onClick={() => toggleDrawer(!isOpen)}>
            socials
          </span>
          <span>&nbsp;―&nbsp;</span>
          <span className={styles.link}>stats</span>
        </nav>
        <small>
          <Link href="/changelog">
            <a sx={{ variant: 'containers.link' }}>
              <h6>{`v${version}`}</h6>
            </a>
          </Link>
        </small>
      </div>
      <Socials close={close} isOpen={isOpen}></Socials>
    </footer>
  )
}

export default Footer
