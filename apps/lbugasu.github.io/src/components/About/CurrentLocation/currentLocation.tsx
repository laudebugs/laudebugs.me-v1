import styles from './currentLocation.module.scss'

export const CurrentLocation = () => {
  return (
    <span className={styles.currentLocation}>
      <p className={styles.location}>Plano, Texas (working remotely)</p>
    </span>
  )
}
