/** @jsxImportSource theme-ui */

import { Image } from 'theme-ui'
import { dayCount } from '../helpers/posts.helpers'
import Tags from './tags'
import styles from './post-info.module.scss'

export default function PostInfo(matter) {
  const { frontMatter } = matter
  console.log(frontMatter)
  return (
    <div className={styles.postinfo}>
      <span>
        <Image src={frontMatter.image}></Image>
      </span>
      <span className={styles.deets}>
        <h1>{frontMatter.title.toLowerCase()}</h1>
        {frontMatter.tags && <Tags tags={frontMatter.tags} />}
        <span className={styles.details}>
          <p>
            №: <span sx={{ textDecoration: 'underline' }}>{frontMatter.no} </span>
          </p>
          <p>{dayCount(frontMatter.publishedOn)}</p>
        </span>
      </span>
    </div>
  )
}
