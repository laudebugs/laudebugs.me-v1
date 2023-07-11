/** @jsxImportSource theme-ui */

import { getFilesFromSrcDir, getSinglePostFromSrcDir, getImageForPost } from '@laudebugs/utils'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { useRouter } from 'next/router'
import { Spinner } from 'theme-ui'
import { memo } from 'react'
import Image from 'next/image'
import { dayCount } from '@laudebugs/utils'
import styles from './fragments.module.scss'
import HeadWithMetaTags from '../../components/head'

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
    <div className={styles.singleFragment}>
      <HeadWithMetaTags frontMatter={frontMatter} />
      <Image className={'img'} src={frontMatter.image} width={300} height={200} alt={frontMatter?.title} />
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
