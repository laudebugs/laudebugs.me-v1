import styles from './tags.module.scss'

export default function Tags({ tags }) {
  return (
    <span className={styles.tags}>
      {tags.map((tag, index) => (
        <h6 key={tag}>
          {tag}
          {index !== tags.length - 1 && <span> · &nbsp;</span>}
        </h6>
      ))}
    </span>
  )
}
