/** @jsxImportSource theme-ui */

export const SpotifyTrack = (props: any) => {
  return (
    <div>
      <iframe
        src={props.src}
        sx={{ borderRadius: '12px', height: '100px' }}
        width="100%"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}
