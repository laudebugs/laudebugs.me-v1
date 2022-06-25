/** @jsxImportSource theme-ui */

import Head from 'next/head'
import { memo } from 'react'
import PostPreview from '../../components/post-preview'
import Stats from '../../components/stats'
import { getFilesFromSrcDir, getStatsForPosts } from '../../helpers/files.helpers'
import styles from '../dev/dev.module.scss'

function Journal(props) {
  return (
    <div className={styles.content}>
      <Head>
        <title key="title">Lau de Bugs - Journal</title>
        <meta key="description" name="description" content="Bugasu\'s Journal. I follow stories, people, journeys and log them here" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Stats {...props}></Stats>
      {props.posts.map(post => (
        <PostPreview key={post.slug} post={post}></PostPreview>
      ))}
    </div>
  )
}
export default memo(Journal)

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
