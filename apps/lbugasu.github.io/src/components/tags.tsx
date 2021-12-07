/** @jsxImportSource theme-ui */

import styles from './tags.module.scss'

export default function Tags({ tags }) {
  return (
    <span className={styles.tags}>
      {tags.map((tag, index) => (
        <h6 key={tag} sx={{ fontFamily: 'monospace' }}>
          {tag}
        </h6>
      ))}
    </span>
  )
}
