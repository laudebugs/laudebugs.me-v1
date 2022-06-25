/** @jsxImportSource theme-ui */

import { ITag } from '@sandstorm/components'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { memo } from 'react'
import PostPreview from '../../components/post-preview'
import Stats from '../../components/stats'
import { getFilesFromSrcDir, getStatsForPosts } from '../../helpers/files.helpers'
import styles from './dev.module.scss'

function Index(props) {
  const [selectedTags, setSelectedTags] = useState<ITag[]>([])
  const [posts, setPosts] = useState(props.posts)

  const toggleTag = (tag: ITag) => {
    if (selectedTags.find(({ title }) => title === tag.title)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  useEffect(() => {
    const taggedPosts = props.posts.filter(post => {
      return post.tags.some((postTag: string) => {
        const tag = selectedTags.find(({ title }) => title == postTag)
        return !!tag
      })
    })
    setPosts(taggedPosts)
    if (selectedTags.length === 0) {
      setPosts(props.posts)
    }
  }, [selectedTags, props.posts])

  return (
    <div className={styles.content}>
      <Head>
        <title key="title">Lau de Bugs - Dev</title>
        <meta key="description" name="description" content="Bugasu\'s Dev blog where you can read Web Development articles and guides" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Stats toggleTag={toggleTag} selectedTags={selectedTags} {...props}></Stats>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post}></PostPreview>
      ))}
    </div>
  )
}

export default memo(Index)

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
