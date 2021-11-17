/** @jsxImportSource theme-ui */

import styles from './blockquote.module.scss'

const BlockQuote = props => {
  return (
    <div className={styles.wrapper}>
      <span {...props}></span>
    </div>
  )
}
export default BlockQuote
