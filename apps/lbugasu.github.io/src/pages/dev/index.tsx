/** @jsxImportSource theme-ui */

import Head from 'next/head'
import PostPreview from '../../components/post-preview'
import Stats from '../../components/stats'
import { getFilesFromSrcDir, getStatsForPosts } from '../../helpers/files.helpers'
import styles from './dev.module.scss'

export default function Index(props) {
  return (
    <div className={styles.content}>
      <Head>
        <title key="title">Lau de Bugs - Dev</title>
        <meta key="description" name="description" content="Bugasu\'s Dev blog where you can read Web Development articles and guides" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Stats {...props}></Stats>
      {props.posts.map(post => (
        <PostPreview key={post.slug} post={post}></PostPreview>
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
