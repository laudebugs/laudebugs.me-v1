import styles from './download.module.scss'

export const DownloadButton = props => {
  return (
    <span className={styles.downloadButon} {...props}>
      <a href="/assets/resume_12_2021.pdf" target={'_blank'}>
        <button className={`${styles.button} ${styles.button__dione}`}>
          <span className={styles.download}>
            Download <span className={styles.mobile}> &nbsp;Resume</span>
          </span>
        </button>
      </a>
    </span>
  )
}
