import styles from './tags.module.scss'

export default function Tags({ tags }) {
  return (
    <span className={styles.tags}>
      {tags.map((tag, index) => (
        <>
          <h6 key={tag}>{tag}</h6>
          {index !== tags.length - 1 && <span> &nbsp;· &nbsp;</span>}
        </>
      ))}
    </span>
  )
}
