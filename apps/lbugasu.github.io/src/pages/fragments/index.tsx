/** @jsxImportSource theme-ui */
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { memo, useEffect, useState } from 'react'
import { Spinner } from 'theme-ui'
import { getFilesFromSrcDir, getStatsForPosts } from '../../helpers/files.helpers'
import styles from './fragments.module.scss'
import Image from 'next/image'
import { shuffle } from 'lodash'
import { dayCount } from '../../helpers/posts.helpers'
import Tags from '../../components/tags'
import Link from 'next/link'

function Fragments({ fragments }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (Array.isArray(fragments)) {
      setLoaded(true)
    }
  }, [fragments])
  if (!loaded) {
    return (
      <div className={styles.spinner}>
        <Spinner size={48} />
      </div>
    )
  }
  return (
    <div className={styles.container}>
      {fragments.map((fragment, i) => {
        return (
          <Link key={fragment?.frontMatter?.slug} href={`/fragments/${fragment.frontMatter.slug}`}>
            <a id={fragment.frontMatter.slug} className={styles.anchor}>
              <div className={styles.fragment}>
                <div className={styles.description}>
                  <div className={styles.title} style={{ gridArea: fragment.gridAreas[0] }}>
                    <h2>{fragment?.frontMatter?.title}</h2>
                  </div>
                  <span className={styles.image} style={{ gridArea: fragment.gridAreas[1] }}>
                    <Image src={fragment.frontMatter.image} width={1280} height={720} alt={fragment?.frontMatter?.title} />
                  </span>
                  <div style={{ gridArea: fragment.gridAreas[2] }} className={styles.metadata}>
                    <p>{dayCount(fragment.frontMatter.publishedOn)}</p>
                    <span className={styles.tags}>{fragment.frontMatter.tags && <Tags tags={fragment.frontMatter.tags} />}</span>
                  </div>
                </div>
                <MDXRemote {...fragment?.content} />
                {i < fragments.length - 1 && <hr />}
              </div>
            </a>
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
