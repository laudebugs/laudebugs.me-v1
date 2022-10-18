import Image from 'next/future/image'
import Link from 'next/link'
import { dayCount } from '../helpers/posts.helpers'
import styles from './post-preview.module.scss'

const PostPreview = ({ post }) => {
  return (
    <Link href={`/${post.type}/${post.slug}`}>
      <a className={styles.link}>
        <h5>{post.title}</h5>
        <small>{dayCount(post.publishedOn)}</small>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image src={post.image} alt={post.title} fill />
          </div>
          <p>{post.summary}</p>
        </div>
      </a>
    </Link>
  )
}

export default PostPreview
