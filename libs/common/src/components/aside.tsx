/** @jsxImportSource theme-ui */

import styles from './aside.module.scss'

export const Aside = (props: any) => {
  return (
    <div className={styles['wrapper']} sx={{ position: 'relative' }}>
      <div className={styles['aside']}>{props.children}</div>
    </div>
  )
}
