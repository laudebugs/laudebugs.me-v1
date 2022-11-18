import Link from 'next/link'
import styles from './download.module.scss'

export const DownloadButton = props => {
  return (
    <span className={`${styles.downloadButon} noSelect`} {...props}>
      <Link href="/assets/laurence_ininda_resume_06_2022.pdf" target={'_blank'}>
        <button className={`${styles.button} ${styles.button__dione}`}>
          <span className={styles.download}>
            Download <span className={styles.mobile}> &nbsp;Resume</span>
          </span>
        </button>
      </Link>
    </span>
  )
}
