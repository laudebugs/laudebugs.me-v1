/** @jsxImportSource theme-ui */

const NotFound = () => {
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
      <span sx={{ fontSize: '200%' }}>Oops, something here!</span>
      <span className="verySpecialChar" sx={{ fontSize: '400%' }}>
        [
      </span>
    </div>
  )
}

export default NotFound
