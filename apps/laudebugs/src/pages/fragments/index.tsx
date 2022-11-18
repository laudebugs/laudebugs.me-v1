/** @jsxImportSource theme-ui */
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { memo } from 'react'
import { getFilesFromSrcDir } from '../../helpers/files.helpers'
import styles from './fragments.module.scss'
import Image from 'next/image'
import { shuffle } from 'lodash'
import { dayCount } from '@laudebugs/utils/functions'
import Tags from '../../components/tags'
import Link from 'next/link'
import { ITag } from '@laudebugs/common/models'

function Fragments({ fragments }) {
  const createTags = (tags: string[]): ITag[] => {
    return tags.map(tag => {
      return {
        title: tag,
        articleCount: 1
      }
    })
  }

  return (
    <div className={styles.container}>
      {fragments.map((fragment, i) => {
        return (
          <Link
            key={fragment?.frontMatter?.slug}
            href={`/fragments/${fragment.frontMatter.slug}`}
            id={fragment.frontMatter.slug}
            className={styles.anchor}
          >
            <div className={styles.fragment}>
              <div className={styles.description}>
                <div className={styles.title} style={{ gridArea: fragment.gridAreas[0] }}>
                  <h2>{fragment?.frontMatter?.title}</h2>
                </div>
                <span className={styles.image} style={{ gridArea: fragment.gridAreas[1] }}>
                  <Image src={fragment.frontMatter.image} fill alt={fragment?.frontMatter?.title} />
                </span>
                <div style={{ gridArea: fragment.gridAreas[2] }} className={styles.metadata}>
                  <p>{dayCount(fragment.frontMatter.publishedOn)}</p>
                  <span className={styles.tags}>
                    {fragment.frontMatter.tags && (
                      <Tags tags={createTags(fragment.frontMatter.tags)} showCount={false} showExpand={false} />
                    )}
                  </span>
                </div>
              </div>
              <MDXRemote {...fragment?.content} />
              {i < fragments.length - 1 && <hr />}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default memo(Fragments)

export async function getStaticProps() {
  let fragments = getFilesFromSrcDir('posts/fragments', true)
  fragments = await Promise.all(
    fragments.map(async fragment => {
      const mdxSource = await serialize(fragment.content, { scope: fragment.frontMatter })
      return { frontMatter: fragment.frontMatter, content: mdxSource, gridAreas: shuffle(['a', 'b', 'c']) }
    })
  )
  return {
    props: {
      fragments
    }
  }
}
