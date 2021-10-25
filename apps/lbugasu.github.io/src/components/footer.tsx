/** @jsxImportSource theme-ui */
import Link from 'next/link'
import packageJson from 'package.json'
import styles from './footer.module.scss'

const Footer = className => {
  const { name, version } = packageJson

  return (
    <footer>
      <div className={styles.footer}>
        <span />
        <nav>
          <span>socials</span>
          <span>&nbsp;―&nbsp;</span>
          <span>stats</span>
        </nav>
        <small>
          <Link href="/changelog">
            <a sx={{ variant: 'containers.link' }}>{`v${version}`}</a>
          </Link>
        </small>
      </div>
    </footer>
  )
}

export default Footer
