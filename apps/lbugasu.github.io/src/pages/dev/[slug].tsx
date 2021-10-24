/* eslint-disable react/display-name */
/** @jsxImportSource theme-ui */

import { getFilesFromSrcDir, getSinglePostFromSrcDir } from '../../helpers/files'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { useRouter } from 'next/router'
import { Spinner } from 'theme-ui'
import matter from 'gray-matter'
import Btn from '../../components/btn'

const components = {
  Btn
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
    <>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} components={components} />
    </>
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
