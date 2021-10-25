/** @jsxImportSource theme-ui */

import { getFilesFromSrcDir, getStatsForPosts } from '../../helpers/files.helpers'

import Stats from '../../components/stats'
import PostPreview from '../../components/post-preview'

function Journal(props) {
  return (
    <div sx={{ variant: 'containers.contentPage' }}>
      <Stats {...props}></Stats>
      {props.posts.map(post => (
        <PostPreview key={post.id} post={post}></PostPreview>
      ))}
    </div>
  )
}
export default Journal

export async function getStaticProps() {
  const filePosts = getFilesFromSrcDir('posts/journal')
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
