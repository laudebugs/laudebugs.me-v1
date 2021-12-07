import { memo, useEffect, useState } from 'react'
import copy from 'copy-to-clipboard'

import styles from './pre.module.scss'

const BasePreComponent = props => {
  const { children, ...rest } = props
  const [copied, setCopied] = useState(false)

  const copyToClipBoard = () => {
    copy(children.props.children)
    setCopied(true)
  }

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 3000)
    }
  }, [copied])

  return (
    <div className={styles.codeBlock}>
      <div
        className={`${styles.copyToClipboard} ${copied ? styles.copied : ''}`}
        onClick={() => {
          copyToClipBoard()
        }}
      />
      <pre {...rest}>
        <code>{children}</code>
      </pre>
    </div>
  )
}

export const Pre = memo(BasePreComponent)
