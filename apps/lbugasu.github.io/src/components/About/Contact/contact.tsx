import styles from './contact.module.scss'
import LinkedIn from '../../socials/linkedin'
import { Email } from '../../socials/email'
export const Contact = () => {
  return (
    <span className={styles.contact}>
      Contact:{' '}
      <a href="mailto:lbugasu@gmail.com">
        <Email />
      </a>{' '}
      <a href="https://www.linkedin.com/in/laurence-ininda/" target={'_blank'} rel="noreferrer">
        {' '}
        <LinkedIn />
      </a>
    </span>
  )
}
