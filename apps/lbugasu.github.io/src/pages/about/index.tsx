import Head from 'next/head'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import fs from 'fs'
import path from 'path'
import styles from './index.module.scss'
import { DownloadButton, Hi, AngularLogo, ReactLogo, Contact, CurrentLocation } from '@sandstorm/components'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const components = {
  Hi,
  AngularLogo,
  ReactLogo,
  Contact,
  CurrentLocation
}
function About({ source }) {
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    console.log('loaded document')
    setPageNumber(1)
  }

  return (
    <div className={styles.about}>
      <Head>
        <title key="title">Lau de Bugs - About</title>
        <meta key="description" name="description" content="More about what I do." />
        <meta name="robots" content="index, follow" />
      </Head>
      <MDXRemote {...source} components={components} />

      <div className={styles.container}>
        <Document
          file="./assets/resume_12_2021.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className={styles.resume}
          externalLinkTarget="_self"
        >
          <Page pageNumber={pageNumber} className={styles.page} width={800} />
        </Document>
        <DownloadButton className={styles.downloadButton} />
      </div>
    </div>
  )
}
export default About

export async function getStaticProps() {
  const aboutPath = 'apps/lbugasu.github.io/src/components/About/aboutMe.mdx'
  const filePath = path.join(process.cwd(), aboutPath)
  console.log(filePath)
  const file = fs.readFileSync(filePath, 'utf-8')
  const { content } = matter(file)
  const source = await serialize(content)
  return {
    props: {
      source
    }
  }
}
