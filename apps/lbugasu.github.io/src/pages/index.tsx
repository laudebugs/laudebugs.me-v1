import styles from './index.module.scss'
import { useColorMode } from 'theme-ui'
import Header from '../components/header'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

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
      <Header {...props} />
      <h2>{props.word}</h2>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'src/posts/dev')
  const filenames = fs.readdirSync(postsDirectory)
  const filePosts = filenames.map(filename => {
    const fullPath = path.join(process.cwd(), 'src/posts', filename)
    const post = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(post)
    return data
  })
  return {
    props: {
      initialColorMode: 'light',
      posts: filePosts
    }
  }
}
