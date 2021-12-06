/** @jsxImportSource theme-ui */

import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useRouter } from 'next/router'
import { Spinner } from 'theme-ui'
import Btn from '../../components/btn'
import Aside from '../../components/Aside/Aside'
import BlockQuote from '../../components/blockQuote/blockquote'
import PostInfo from '../../components/post-info'
import { getFilesFromSrcDir, getSinglePostFromSrcDir, getImageForPost } from '../../helpers/files.helpers'
import styles from './dev.module.scss'
import { IssuesAndComments } from '../../components/IssuesAndComments'
import { memo } from 'react'

const components = {
  Btn,
  Aside,
  BlockQuote
}

const DevPost = ({ source, frontMatter }) => {
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
      <PostInfo frontMatter={frontMatter} />
      <MDXRemote {...source} components={components} />
      <hr />
      <IssuesAndComments slug={frontMatter.slug} />
    </div>
  )
}

export default memo(DevPost)

export async function getStaticPaths() {
  const filePosts = getFilesFromSrcDir('posts/dev')
  const paths = filePosts.map(post => ({ params: { slug: post.slug } }))
  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let post
  let image
  try {
    post = getSinglePostFromSrcDir('posts/dev', params.slug)
    image = getImageForPost(params.slug)
  } catch (err) {
    // TODO: handle error
  }

  const source = post
  const { content, data } = matter(source)
  data.image = image
  const mdxSource = await serialize(content, { scope: data })
  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}
