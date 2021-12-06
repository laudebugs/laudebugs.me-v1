/* eslint-disable react/display-name */
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { FC, forwardRef, MutableRefObject } from "react";
import { components } from "theme-ui";
import PostInfo from "./post-info";
import styles from '../pages/dev/dev.module.scss'

interface ContentProps{
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  frontMatter: { [key: string]: any}
  // ref: MutableRefObject<undefined>
}
export const Content: FC<any> = forwardRef(({frontMatter, source}) => {
  return (
  <div className={styles.singlePost}>
    <PostInfo frontMatter={frontMatter} />
    <MDXRemote {...source} components={components} />
  </div>
  )
})
