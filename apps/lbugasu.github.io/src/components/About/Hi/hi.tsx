import styles from './hi.module.scss'

export const Hi = () => {
  return (
    <span className={styles.hi}>
      <h2>
        {' '}
        Hi <span className="specialChar very">p</span>
      </h2>
    </span>
  )
}
