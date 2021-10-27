import { MDXRemote } from 'next-mdx-remote'
import { getChangeLog } from '../../helpers/files.helpers'
import ReactMarkdown from 'react-markdown'
import styles from './index.module.scss'

const Changelog = ({ changelog }) => {
  return <ReactMarkdown className={styles.content}>{changelog}</ReactMarkdown>
}
export default Changelog

export async function getStaticProps() {
  const changelog = getChangeLog()
  return {
    props: {
      changelog
    }
  }
}
