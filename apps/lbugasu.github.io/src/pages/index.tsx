import styles from './index.module.scss'
import { useColorMode } from 'theme-ui'
import { getFilesFromSrcDir } from '../helpers/files'

export function Index(props) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  const [colorMode, setColorMode] = useColorMode()
  setColorMode(props.initialColorMode)

  return (
    <div className={styles.page}>
      <h2>{props.word}</h2>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const filePosts = getFilesFromSrcDir('posts/dev')
  return {
    props: {
      initialColorMode: 'light',
      posts: filePosts
    }
  }
}
