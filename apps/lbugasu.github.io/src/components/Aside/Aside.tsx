/** @jsxImportSource theme-ui */

import styles from './Aside.module.scss'

const Aside = props => {
  return (
    <div className={styles.wrapper} sx={{ position: 'relative' }}>
      <div {...props} className={styles.aside} />
    </div>
  )
}

export default Aside
