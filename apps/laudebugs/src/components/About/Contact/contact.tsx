import styles from './contact.module.scss'
import LinkedIn from '../../socials/linkedin'
import { Email } from '../../socials/email'
import Link from 'next/link'
export const Contact = () => {
  return (
    <span className={styles.contact}>
      Contact:{' '}
      <Link href="mailto:laudebugs@gmail.com">
        <Email />
      </Link>{' '}
      <Link href="https://www.linkedin.com/in/laurence-ininda/" target={'_blank'} rel="noreferrer">
        {' '}
        <LinkedIn />
      </Link>
    </span>
  )
}
