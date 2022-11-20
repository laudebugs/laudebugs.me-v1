/** @jsxImportSource theme-ui */

import Image from 'next/image'
import { dayCount } from '@laudebugs/utils'
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
  const postTags = frontMatter.tags.map(tag => ({ title: tag, articleCount: 0 }))

  return (
    <div className={styles.postinfo}>
      <HeadWithMetaTags {...frontMatter} />
      <span className={styles.featuredImage}>
        <span className={styles.featuredImageContainer}>
          {!!frontMatter?.image && <Image style={{ objectFit: 'contain' }} src={frontMatter.image} fill alt={frontMatter.title} />}
        </span>
        <span className={styles.caption}>
          {frontMatter.imageCaption ? (
            <figcaption>{frontMatter.imageCaption}</figcaption>
          ) : frontMatter.imageCredit ? (
            <figcaption dangerouslySetInnerHTML={{ __html: frontMatter.imageCredit }}></figcaption>
          ) : null}
        </span>
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
