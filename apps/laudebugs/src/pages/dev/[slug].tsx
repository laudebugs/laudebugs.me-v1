/** @jsxImportSource theme-ui */

import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useRouter } from 'next/router'
import { Spinner } from 'theme-ui'
import Aside from '../../components/Aside/Aside'
import Note from '../../components/Note/note'
import PostInfo from '../../components/post-info'
import { getFilesFromSrcDir, getSinglePostFromSrcDir, getImageForPost } from '../../helpers/files.helpers'
import styles from './dev.module.scss'
import { IssuesAndComments } from '../../components/IssuesAndComments'
import { memo } from 'react'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { Pre } from '../../components/mdxElements/pre'
import { useSelector } from 'react-redux'
import { selectIsNpm } from '@sandstorm/redux/store'
import Giscus from '@giscus/react'

const DevPost = ({ source, frontMatter, lastModified }) => {
  const router = useRouter()

  const isNpm = useSelector(selectIsNpm)

  if (router.isFallback) {
    return (
      <div sx={{ width: '100%', height: '100%' }}>
        <Spinner size={48} />
      </div>
    )
  }
  const components = {
    Aside,
    Note,
    pre: props => <Pre variant="pre" {...props} isNpm={isNpm} />
  }

  if (!isNpm) {
    let { compiledSource } = source
    if (!/npm install[\r\n]+/gm.test(compiledSource)) {
      compiledSource = compiledSource.replace('npm install', 'yarn add')
    } else {
      compiledSource = compiledSource.replace('npm install', 'yarn')
    }
    source.compiledSource = compiledSource
  }

  return (
    <div className={styles.singlePost}>
      <PostInfo frontMatter={frontMatter} className={styles.postInfo} />
      <MDXRemote {...source} components={components} />
      <hr />
      <Giscus
        id="comments"
        repo="laudebugs/blog-posts"
        repoId="R_kgDOGZa9rg"
        category="Blog Articles"
        categoryId="DIC_kwDOGZa9rs4CSGfP"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
      <small>
        Last modified on: <code>{lastModified}</code>
      </small>
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
  const { post, lastModified } = getSinglePostFromSrcDir('posts/dev', params.slug)
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
