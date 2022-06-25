/** @jsxImportSource theme-ui */

import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import { memo } from 'react'
import { getFilesFromSrcDir, getImageForPost, getSinglePostFromSrcDir } from '../../helpers/files.helpers'
import styles from './catalogue.module.scss'
import matter from 'gray-matter'

function APostAboutFood({ catalogue }) {
  return (
    <div className={styles.content}>
      <Head>
        <title key="title">Lau de Bugs - Catalogue</title>
        <meta key="description" name="description" content="Bugasu's Food Blog Page. Learning to cook instead of working sometimes" />
        <meta name="robots" content="index, follow" />
      </Head>
      <h1>Catalogue</h1>
    </div>
  )
}
export default memo(APostAboutFood)

export async function getStaticPaths() {
  const filePosts = getFilesFromSrcDir('posts/dev')
  const paths = filePosts.map(post => ({ params: { slug: post.slug } }))
  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { post, lastModified } = getSinglePostFromSrcDir('posts/cuisine', params.slug)
  const image = getImageForPost(params.slug)

  const source = post
  const { content, data } = matter(source)
  data.image = image
  const mdxSource = await serialize(content, {
    mdxOptions: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      rehypePlugins: [rehypeAutolinkHeadings, rehypeSlug, rehypeKatex]
    }
  })
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      lastModified
    }
  }
}
