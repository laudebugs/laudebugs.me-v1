import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { getChangeLog } from '../../helpers/files.helpers'
import styles from './index.module.scss'

const Changelog = ({ changelog }) => {
  return (
    <>
      <Head>
        <title key="title">Lau de Bugs - Changelog</title>
        <meta
          key="description"
          name="description"
          content="Bugasu\'s Changelog - Release Information, Feature improvements and more details"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <ReactMarkdown className={styles.content}>{changelog}</ReactMarkdown>
    </>
  )
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
