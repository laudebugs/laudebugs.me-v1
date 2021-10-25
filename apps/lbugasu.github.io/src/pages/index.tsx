import styles from './index.module.scss'
import { useColorMode } from 'theme-ui'
import { getFilesFromSrcDir } from '../helpers/files.helpers'
import Featured from '../components/featured'
import PostPreview from '../components/post-preview'
export function Index({ initialColorMode, posts }) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  const [colorMode, setColorMode] = useColorMode()
  setColorMode(initialColorMode)

  return (
    <div>
      <Featured post={posts[0]} />
      <div className={styles.nonFeatured}>
        <PostPreview post={posts[1]} />
        <PostPreview post={posts[2]} />
      </div>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const filePosts = getFilesFromSrcDir('posts/journal')

  const _posts = filePosts.map((post, index) => {
    const no = index + 1
    return {
      ...post,
      no: `${no < 10 ? '00' : no < 100 ? '0' : ''}${no}`
    }
  })
  return {
    props: {
      initialColorMode: 'light',
      posts: _posts
    }
  }
}
