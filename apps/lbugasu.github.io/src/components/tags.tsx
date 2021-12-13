/** @jsxImportSource theme-ui */

import styles from './tags.module.scss'

export default function Tags({ tags, toggleTag, selectedTags }) {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  if (!toggleTag) toggleTag = () => {}
  if (!selectedTags) selectedTags = []

  return (
    <span className={styles.tags}>
      {tags.map((tag, index) => {
        const isSelected = selectedTags.length > 0 && selectedTags.includes(tag)
        return (
          <span
            className={isSelected ? styles.selected : styles.tag}
            onClick={() => toggleTag(tag)}
            key={tag}
            sx={{ fontFamily: 'monospace' }}
          >
            {tag}
          </span>
        )
      })}
    </span>
  )
}
