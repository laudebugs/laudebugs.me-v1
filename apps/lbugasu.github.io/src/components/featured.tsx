/** @jsxImportSource theme-ui */

import Image from 'next/image'
import Link from 'next/link'
import { dayCount } from '../helpers/posts.helpers'
import styles from './featured.module.scss'
import Tags from './tags'

const Featured = ({ post }) => {
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
            {post.tags && <Tags tags={post.tags} />}
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
