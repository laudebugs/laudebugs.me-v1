import { MDXRemote } from 'next-mdx-remote'
import { getChangeLog } from '../../helpers/files.helpers'
import ReactMarkdown from 'react-markdown'

const Changelog = ({ changelog }) => {
  return <ReactMarkdown>{changelog}</ReactMarkdown>
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
