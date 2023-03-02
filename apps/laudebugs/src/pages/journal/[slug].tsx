/** @jsxImportSource theme-ui */

import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { Spinner } from 'theme-ui'
import HeadWithMetaTags from '../../components/head'
import PostInfo from '../../components/post-info'
import { getFilesFromSrcDir, getSinglePostFromSrcDir } from '@laudebugs/utils'
import styles from '../dev/dev.module.scss'
const components = {}
import Head from 'next/head'
function JournalEntry({ source, frontMatter }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div sx={{ width: '100%', height: '100%' }}>
        <Spinner size={48} />
      </div>
    )
  }
  return (
    <div className={styles.singlePost}>
      <HeadWithMetaTags frontMatter={frontMatter} />
      <PostInfo frontMatter={frontMatter} />
      <MDXRemote {...source} components={components} />
    </div>
  )
}

export default memo(JournalEntry)

export async function getStaticPaths(slug) {
  const filePosts = getFilesFromSrcDir('posts/journal')

  const paths = filePosts.map(post => ({ params: { slug: post.slug } }))

  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { post } = getSinglePostFromSrcDir('posts/journal', params.slug)

  const source = post
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, { scope: data })
  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}
