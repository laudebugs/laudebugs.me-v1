/** @jsxImportSource theme-ui */

import Image from 'next/image'
import { dayCount } from '../helpers/posts.helpers'
import HeadWithMetaTags from './head'
import styles from './post-info.module.scss'
import Tags from './tags'
import archive from '../../../../posts/archive.json'

export default function PostInfo(matter) {
  const { frontMatter } = matter
  const posts = archive as any[]
  const { no } = posts.find(post => post.slug === frontMatter.slug)

  return (
    <div className={styles.postinfo}>
      <HeadWithMetaTags {...frontMatter} />
      <span className={styles.featuredImage}>
        <Image
          className={styles.featuredImage}
          src={`/post-images/${frontMatter.image}`}
          height={720}
          width={1280}
          alt={frontMatter.title}
        />
      </span>
      <span className={styles.deets}>
        <h1>{frontMatter.title.toLowerCase()}</h1>
        {frontMatter.tags && <Tags tags={frontMatter.tags} />}
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
