/** @jsxImportSource theme-ui */

import sdk, { UiViewOption } from '@stackblitz/sdk'
import { FC, useEffect, useRef } from 'react'

interface IStackBlitzEmbedProps {
  view: UiViewOption
  projectId: string
  openFile: string
}
export const StackBlitzEmbed: FC<IStackBlitzEmbedProps> = ({ view, projectId, openFile }) => {
  const embedElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    sdk.embedProjectId(embedElement?.current ?? 'embed', projectId, {
      forceEmbedLayout: true,
      openFile,
      view: view ?? 'preview',
      clickToLoad: true
    })
  }, [])

  return (
    <div>
      <div sx={{ height: '500px' }} id="embed" ref={embedElement}></div>
    </div>
  )
}
