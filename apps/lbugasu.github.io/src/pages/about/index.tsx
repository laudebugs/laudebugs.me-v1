import Head from 'next/head'
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Button } from 'theme-ui'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

import styles from './index.module.scss'
import { AboutButton } from '../../components/buttons/aboutButton/aboutButton'
import { DownloadButton } from '../../components/buttons/download/download'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function About() {
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
      <h1>About</h1>
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
