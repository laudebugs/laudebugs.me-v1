/** @jsxImportSource theme-ui */

import { FC, memo } from 'react'
import styles from './tags.module.scss'

export interface TagsProps {
  tags: string[]
  toggleTag?: (tag: string) => void
  selectedTags?: []
}
const Tags: FC<TagsProps> = ({ tags, toggleTag, selectedTags }) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  if (!toggleTag) toggleTag = () => {}
  if (!selectedTags) selectedTags = []

  return (
    <span className={styles.tags}>
      {tags.map((tag: string, index) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const isSelected = !!selectedTags &&  selectedTags.length > 0 && selectedTags.includes(tag)
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

export default memo(Tags)
