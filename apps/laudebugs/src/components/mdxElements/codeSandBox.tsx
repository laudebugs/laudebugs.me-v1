/** @jsxImportSource theme-ui */

import { Sandpack } from '@codesandbox/sandpack-react'
import React, { useEffect } from 'react'
import { FC, memo } from 'react'
import { shadesOfPurple } from './theme'

type CodeSandBoxProps = {
  code?: string
  fileName?: string
}
const _CodeSandBox: FC<CodeSandBoxProps> = ({ fileName, children }) => {
  const [files, setFiles] = React.useState({})

  useEffect(() => {
    const _files = {
      [`/${fileName}`]: {
        code: children
      }
    }
    setFiles(_files)
  }, [])

  return <Sandpack template="react" files={files} theme={shadesOfPurple} />
}
export const CodeSandBox = memo(_CodeSandBox)
