/** @jsxImportSource theme-ui */

import Image from 'next/image'
import { dayCount } from '../helpers/posts.helpers'
import HeadWithMetaTags from './head'
import styles from './post-info.module.scss'
import Tags from './tags'
import archive from '../../../../posts/out/archive.json'
import { ComponentProps, FC, memo } from 'react'

type PostInfoProps = {
  frontMatter: any
  lastModified?: string
} & ComponentProps<any>

const PostInfoComponent: FC<PostInfoProps> = ({ frontMatter, lastModified }) => {
  const posts = archive as any[]
  const { no } = posts.find(post => post.slug === frontMatter.slug)
  const caption = frontMatter.imageCaption || frontMatter.imageCredit
  const postTags = frontMatter.tags.map(tag => ({ title: tag, articleCount: 0 }))

  return (
    <div className={styles.postinfo}>
      <HeadWithMetaTags {...frontMatter} />
      <span className={styles.featuredImage}>
        {!!frontMatter?.image && (
          <Image className={styles.featuredImage} src={frontMatter.image} height={720} width={1280} alt={frontMatter.title} />
        )}
        {frontMatter.imageCaption ? (
          <figcaption>{frontMatter.imageCaption}</figcaption>
        ) : frontMatter.imageCredit ? (
          <figcaption dangerouslySetInnerHTML={{ __html: frontMatter.imageCredit }}></figcaption>
        ) : null}
      </span>
      <span className={styles.deets}>
        <h1>{frontMatter.title.toLowerCase()}</h1>
        {frontMatter.tags && <Tags tags={postTags} showCount={false} />}
        <span className={styles.details}>
          <p>
            №: <span sx={{ textDecoration: 'underline' }}>{no} </span>
          </p>
          <p>{dayCount(frontMatter.publishedOn)}</p>
        </span>
      </span>
    </div>
  )
}

export default memo(PostInfoComponent)
