import { memo, useEffect, useState } from 'react'
import copy from 'copy-to-clipboard'
import styles from './pre.module.scss'

const BasePreComponent = (props: any) => {
  const { isNpm, ...rest } = props
  const [children, setChildren] = useState(props.children)
  const [hasNpmScript] = useState<boolean>(/npm/gm.test(children.props['children']))
  const [copied, setCopied] = useState(false)

  const copyToClipBoard = () => {
    copy(children?.props['children'])
    setCopied(true)
  }

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2500)
    }
  }, [copied])

  return (
    <div className={styles['codeBlock']}>
      <div
        className={`${styles['copyToClipboard']} ${copied ? styles['copied'] : ''} ${hasNpmScript ? 'npm' : ''}`}
        onClick={() => {
          copyToClipBoard()
        }}
      >
        <small className={`${styles['copiedText']} ${copied ? styles['animateText'] : ''}`}>COPIED</small>
      </div>
      <pre {...rest}>
        <code>{children}</code>
      </pre>
    </div>
  )
}

export const Pre = memo(BasePreComponent)
