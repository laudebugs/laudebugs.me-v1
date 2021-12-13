/** @jsxImportSource theme-ui */

import styles from './Note.module.scss'

const Note = props => {
  return (
    <div className={styles.wrapper}>
      <span className="material-icons-outlined">tips_and_updates</span>
      <span className="content" {...props}></span>
    </div>
  )
}
export default Note
