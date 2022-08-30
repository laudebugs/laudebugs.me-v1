import { FC } from 'react'
import Link from 'next/link'
import styles from './IssuesAndComments.module.scss'
import { GitPullRequestIcon } from '@primer/octicons-react'

export interface IssuesAndCommentsProps {
  slug: string
}
const baseUrl = 'https://github.com/laudebugs/blog-posts/blob/main/dev/'

export const IssuesAndComments: FC<IssuesAndCommentsProps> = ({ slug }) => {
  return (
    <div>
      <p>
        Found an issue or have a suggestion?
        <Link href={`${baseUrl + slug}.mdx`}>
          <a target="__blank" className={styles.link}>
            {' '}
            Raise a PR here
            <span className={styles.icon}>
              <GitPullRequestIcon verticalAlign="middle" size={16} />
            </span>
          </a>
        </Link>
      </p>
    </div>
  )
}