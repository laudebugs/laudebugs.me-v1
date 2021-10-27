/** @jsxImportSource theme-ui */

import { getFilesFromSrcDir, getSinglePostFromSrcDir } from '../../helpers/files.helpers'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { useRouter } from 'next/router'
import { Spinner } from 'theme-ui'
import matter from 'gray-matter'
import Btn from '../../components/btn'
import PostInfo from '../../components/post-info'

const components = {
  Btn
}

import styles from './dev.module.scss'

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
    </div>
  )
}

export default DevPost

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
  try {
    post = getSinglePostFromSrcDir('posts/dev', params.slug)
  } catch (err) {
    // TODO: handle error
  }

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
