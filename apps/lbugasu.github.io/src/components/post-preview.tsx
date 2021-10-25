import { Image } from 'theme-ui'
import { dayCount } from '../helpers/posts.helpers'
import styles from './post-preview.module.scss'
import Link from 'next/link'

const PostPreview = ({ post }) => {
  console.log(post)
  return (
    <Link href={`/${post.type}/${post.slug}`}>
      <a className={styles.link}>
        <h5>{post.title}</h5>
        <small>{dayCount(post.publishedOn)}</small>
        <div className={styles.content}>
          <Image className={styles.image} src={`posts.images/${post.image}`} alt={post.title} />

          <p>{post.summary}</p>
        </div>
      </a>
    </Link>
  )
}

export default PostPreview
