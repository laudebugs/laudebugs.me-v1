/** @jsxImportSource theme-ui */

import Link from 'next/link'
import { Image } from 'theme-ui'
import styles from './featured.module.scss'

const Featured = ({ post }) => {
  return (
    <div className={styles.featured}>
      <div className={styles.content}>
        <div className={styles.postInfo}>
          <span className={styles.title}>
            <h5>{post.title}</h5>
            <span className={styles.tags}>
              {post.tags.map((tag, index) => (
                <h6 key={tag}>
                  {tag}
                  {index !== post.tags.length - 1 && <span> · &nbsp;</span>}
                </h6>
              ))}
            </span>
          </span>

          <span className={styles.details}>
            <p>
              №: <span sx={{ textDecoration: 'underline' }}>{post.no} </span>
            </p>
            <p>{post.publishedOn}</p>
          </span>
        </div>

        <p>{post.summary}</p>
        <small>
          <Link href={`/${post.type}/${post.slug}`}>
            <a>☶ Read</a>
          </Link>
        </small>
      </div>
      <div className={styles.image}>
        <Image src={post.image} alt={post.title} />
      </div>
    </div>
  )
}

export default Featured
