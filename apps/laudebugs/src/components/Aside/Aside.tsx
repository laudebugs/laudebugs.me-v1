/** @jsxImportSource theme-ui */

import { Pre } from '..'
import styles from './Aside.module.scss'

const Aside = props => {
  return (
    <div className={styles.wrapper} sx={{ position: 'relative' }}>
      <div className={styles.aside}>{props.children}</div>
    </div>
  )
}

export default Aside
