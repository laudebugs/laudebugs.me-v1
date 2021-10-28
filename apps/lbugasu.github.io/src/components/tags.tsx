/** @jsxImportSource theme-ui */

import styles from './tags.module.scss'

export default function Tags({ tags }) {
  return (
    <span className={styles.tags}>
      {tags.map((tag, index) => (
        <h6 key={tag} sx={{ fontFamily: 'monospace' }}>
          {tag}
          {/* {index !== tags.length - 1 && <span key={`_${tag}`}> &nbsp;· &nbsp;</span>} */}
        </h6>
      ))}
    </span>
  )
}
