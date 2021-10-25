/** @jsxImportSource theme-ui */

import Link from 'next/link'
import { Image } from 'theme-ui'
import { dayCount } from '../helpers/posts.helpers'
import styles from './featured.module.scss'
import Tags from './tags'

const Featured = ({ post }) => {
  console.log(post)
  return (
    <div className={styles.featured}>
      <div className={styles.content}>
        <div className={styles.postInfo}>
          <span className={styles.title}>
            <Link href={`/${post.type}/${post.slug}`}>
              <h5>{post.title}</h5>
            </Link>

            {post.tags && <Tags tags={post.tags} />}
          </span>

          <span className={styles.details}>
            <p>
              №: <span sx={{ textDecoration: 'underline' }}>{post.no} </span>
            </p>
            <p>{dayCount(post.publishedOn)}</p>
          </span>
        </div>

        <p className={styles.summary}>{post.summary}</p>
        <small>
          <Link href={`/${post.type}/${post.slug}`}>
            <a>☶ Read</a>
          </Link>
        </small>
      </div>
      <div className={styles.image}>
        <Image src={`/posts.images/${post.image}`} alt={post.title} />
      </div>
    </div>
  )
}

export default Featured
