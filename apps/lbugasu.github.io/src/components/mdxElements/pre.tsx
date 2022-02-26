import { memo, useEffect, useRef, useState } from 'react'
import copy from 'copy-to-clipboard'
import styles from './pre.module.scss'
import produce from 'immer'
import { useDispatch } from 'react-redux'
import { appActions } from '@sandstorm/redux/store'

const BasePreComponent = props => {
  const dispatch = useDispatch()
  const { isNpm, ...rest } = props
  // const dispatch = useDispatch()
  const [children, setChildren] = useState(props.children)
  const [hasNpmScript] = useState<boolean>(/npm/gm.test(children.props['children']))
  const [copied, setCopied] = useState(false)

  const copyToClipBoard = () => {
    copy(children.current.props['children'])
    setCopied(true)
  }

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 3000)
    }
  }, [copied])

  function setNpmYarn(isNpm: boolean) {
    dispatch(appActions.setIsNpm(isNpm))
  }

  return (
    <div>
      {hasNpmScript && (
        <div className={styles.npmYarn}>
          <span onClick={() => setNpmYarn(true)}>npm</span>
          <span onClick={() => setNpmYarn(false)}>yarn</span>
        </div>
      )}
      <div className={styles.codeBlock}>
        <div
          className={`${styles.copyToClipboard} ${copied ? styles.copied : ''} ${hasNpmScript ? 'npm' : ''}`}
          onClick={() => {
            copyToClipBoard()
          }}
        />
        <pre {...rest}>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  )
}

export const Pre = memo(BasePreComponent)
