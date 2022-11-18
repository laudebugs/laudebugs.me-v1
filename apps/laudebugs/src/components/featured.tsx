/** @jsxImportSource theme-ui */

import Image from 'next/image'
import Link from 'next/link'
import { dayCount } from '../helpers/posts.helpers'
import styles from './featured.module.scss'
import Tags, { ITag } from './tags'

const Featured = ({ post }) => {
  const tags = post.tags?.map((tag): ITag => ({ title: tag, articleCount: 0 })) ?? []
  return (
    <div className={styles.featured}>
      <div className={styles.content}>
        <div className={styles.postInfo}>
          <span className={styles.title}>
            <Link href={`/${post.type}/${post.slug}`}>
              <h5>{post.title}</h5>
            </Link>
            {tags.length > 0 && <Tags tags={tags} showCount={false} showExpand={false} />}
          </span>

          <span className={styles.details}>
            <p style={{ margin: '5px 0' }}>
              №: <span sx={{ textDecoration: 'underline' }}>{post.no} </span>
            </p>
            <p style={{ margin: '5px 0' }}>{dayCount(post.publishedOn)}</p>
          </span>
        </div>
        <Link href={`/${post.type}/${post.slug}`}>
          <p className={styles.summary}>{post.summary}</p>
        </Link>
        <small>
          <Link href={`/${post.type}/${post.slug}`}>☶ Read</Link>
        </small>
      </div>
      <div className={styles.image}>
        <Link href={`/${post.type}/${post.slug}`}>
          <Image src={post.image} fill alt={post.title} style={{ objectFit: 'contain' }} />
        </Link>
      </div>
    </div>
  )
}

export default Featured
