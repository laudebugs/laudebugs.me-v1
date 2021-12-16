/** @jsxImportSource theme-ui */

import { trackPage } from '@sandstorm/components/analytics'

const NotFound = () => {
  trackPage()
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '10%'
      }}
    >
      <span sx={{ fontSize: '200%' }}>Oops, nothing here!</span>
      <span className="verySpecialChar" sx={{ fontSize: '400%' }}>
        [
      </span>
    </div>
  )
}

export default NotFound
