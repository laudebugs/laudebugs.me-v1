import { Image } from 'theme-ui'
import styles from './post-preview.module.scss'
const PostPreview = ({ post }) => {
  return (
    <div>
      <h5>{post.title}</h5>
      <small>{post.publishedOn}</small>
      <div className={styles.content}>
        <Image className={styles.image} src={post.image} alt={post.title} />

        <p>{post.summary}</p>
      </div>
    </div>
  )
}

export default PostPreview
