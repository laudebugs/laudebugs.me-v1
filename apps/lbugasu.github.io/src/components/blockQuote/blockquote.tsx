/** @jsxImportSource theme-ui */

import styles from './blockquote.module.scss'

const BlockQuote = props => {
  return (
    <div className={styles.wrapper}>
      <span className="material-icons-outlined">tips_and_updates</span>
      <span className="content" {...props}></span>
    </div>
  )
}
export default BlockQuote
