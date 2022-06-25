/** @jsxImportSource theme-ui */

import { FC, memo, useEffect, useState } from 'react'
import styles from './tags.module.scss'

export interface ITag {
  title: string
  articleCount: number
}
export interface TagsProps {
  tags: ITag[]
  toggleTag?: (tag: ITag) => void
  selectedTags?: ITag[]
  showExpand?: boolean
  showCount?: boolean
}
const Tags: FC<TagsProps> = ({ tags, toggleTag, selectedTags, showExpand, showCount }) => {
  if (!toggleTag)
    toggleTag = () => {
      return null
    }
  const [expanded, setExpanded] = useState(false)
  const [displayTags, setDisplayTags] = useState(tags)
  useEffect(() => {
    if (showExpand) {
      if (!expanded) setDisplayTags(tags.slice(0, 10))
      else setDisplayTags(tags)
    }
  }, [expanded, tags, showExpand])

  if (!selectedTags) selectedTags = []
  return (
    <span className={styles.tags}>
      {displayTags.map((tag: ITag, index) => {
        const isSelected = !!selectedTags && selectedTags.length > 0 && !!selectedTags.find(({ title }) => title == tag.title)
        return (
          <span
            className={isSelected ? styles.selected : styles.tag}
            onClick={() => toggleTag(tag)}
            key={tag.title}
            sx={{ fontFamily: 'monospace' }}
          >
            {tag.title} {showCount && <span className={styles.articleCount}>({tag.articleCount})</span>}
          </span>
        )
      })}
      {showExpand && (
        <span onClick={() => setExpanded(!expanded)} className={styles.button + ' material-icons-outlined'}>
          {expanded ? 'expand_less' : 'expand_more'}
        </span>
      )}
    </span>
  )
}

export default memo(Tags)
