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
              <a>
                <h5>{post.title}</h5>
              </a>
            </Link>
            {tags.length > 0 && <Tags tags={tags} showCount={false} showExpand={false} />}
          </span>

          <span className={styles.details}>
            <p>
              №: <span sx={{ textDecoration: 'underline' }}>{post.no} </span>
            </p>
            <p>{dayCount(post.publishedOn)}</p>
          </span>
        </div>

        <Link href={`/${post.type}/${post.slug}`}>
          <a>
            <p className={styles.summary}>{post.summary}</p>
          </a>
        </Link>
        <small>
          <Link href={`/${post.type}/${post.slug}`}>
            <a>☶ Read</a>
          </Link>
        </small>
      </div>
      <div className={styles.image}>
        <Link href={`/${post.type}/${post.slug}`}>
          <a>
            <Image src={post.image} height={720} width={1280} alt={post.title} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Featured
