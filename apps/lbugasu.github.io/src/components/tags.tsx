/** @jsxImportSource theme-ui */

import styles from './tags.module.scss'

export default function Tags({ tags }) {
  return (
    <span className={styles.tags}>
      {tags.map((tag, index) => (
        <p key={tag} sx={{ fontFamily: 'monospace' }}>
          {tag}
        </p>
      ))}
    </span>
  )
}
