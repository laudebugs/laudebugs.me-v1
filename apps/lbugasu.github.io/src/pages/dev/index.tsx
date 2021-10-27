/** @jsxImportSource theme-ui */

import { getFilesFromSrcDir, getStatsForPosts } from '../../helpers/files.helpers'

import Stats from '../../components/stats'
import PostPreview from '../../components/post-preview'
import styles from './dev.module.scss'
export default function Index(props) {
  return (
    <div className={styles.content}>
      <Stats {...props}></Stats>
      {props.posts.map(post => (
        <PostPreview key={post.id} post={post}></PostPreview>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const filePosts = getFilesFromSrcDir('posts/dev')
  const { tags, startDate, endDate, count } = getStatsForPosts(filePosts)
  return {
    props: {
      initialColorMode: 'light',
      posts: filePosts,
      tags,
      startDate,
      endDate,
      count
    }
  }
}
