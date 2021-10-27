/** @jsxImportSource theme-ui */

import styles from './side-nav.module.scss'

function SideNav({ close, isOpen }) {
  return (
    <div sx={{ display: !isOpen ? 'none' : 'block' }}>
      <div className={styles.sideNav}>
        <div className={styles.menu}></div>
        <div onClick={() => close.next(!isOpen)} className={styles.shadow}></div>
      </div>
    </div>
  )
}

export default SideNav
