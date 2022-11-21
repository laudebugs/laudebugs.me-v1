import Head from 'next/head'
import Featured from '../components/featured'
import PostPreview from '../components/post-preview'
import { getFilesFromSrcDir } from '@laudebugs/utils'
import styles from './index.module.scss'
import archive from '../../../../posts/out/archive.json'

export function Index({ initialColorMode, posts }) {
  return (
    <div>
      <Head>
        <title key="title">Lau de Bugs</title>
        <meta
          key="description"
          name="description"
          content="Bugasu\'s blog where you can read Web Development articles as well as stories, poetry and more"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Featured post={archive[0]} />
      <div className={styles.nonFeatured}>
        <PostPreview post={archive[1]} />
        <PostPreview post={archive[2]} />
        <PostPreview post={archive[3]} />
        <PostPreview post={archive[4]} />
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
