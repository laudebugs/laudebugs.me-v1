import Image from 'next/image'
import Link from 'next/link'
import { dayCount } from '@laudebugs/utils'
import styles from './post-preview.module.scss'

const PostPreview = ({ post }) => {
  return (
    <Link href={`/${post.type}/${post.slug}`}>
      <h5>{post.title}</h5>
      <small>{dayCount(post.publishedOn)}</small>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={post.image} alt={post.title} fill />
        </div>
        <p>{post.summary}</p>
      </div>
    </Link>
  )
}

export default PostPreview
