/** @jsxImportSource theme-ui */

import { getFilesFromSrcDir, getSinglePostFromSrcDir } from '@sandstorm/helpers/files.helpers'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { useRouter } from 'next/router'
import { Spinner } from 'theme-ui'
import { memo } from 'react'
import { getImageForPost } from '../../helpers/files.helpers'
import Image from 'next/image'
import { dayCount } from '@sandstorm/helpers/posts.helpers'
import styles from './fragments.module.scss'

const Fragment = ({ source, frontMatter }) => {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <div sx={{ width: '100%', height: '100%' }}>
        <Spinner size={48} />
      </div>
    )
  }
  return (
    <div className={styles.fragment}>
      <Image src={frontMatter.image} width={1280} height={720} alt={frontMatter?.title} />
      <h2>{frontMatter.title}</h2>
      <small>{dayCount(frontMatter.publishedOn)}</small>
      <MDXRemote {...source} />
    </div>
  )
}

export default memo(Fragment)

export async function getStaticPaths() {
  const filePosts = getFilesFromSrcDir('posts/fragments')
  const paths = filePosts.map(post => ({ params: { slug: post.slug } }))
  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { post } = getSinglePostFromSrcDir('posts/fragments', params.slug)
  const source = post
  const image = getImageForPost(params.slug)
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
