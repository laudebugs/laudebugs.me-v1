import { getFilesFromSrcDir, getSinglePostFromSrcDir } from '../../helpers/files'

const DevPost = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
    </>
  )
}

export default DevPost

export async function getStaticPaths() {
  const filePosts = getFilesFromSrcDir('posts/dev')

  const paths = filePosts.map(post => ({ params: { slug: post.slug } }))

  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let post
  try {
    post = getSinglePostFromSrcDir('posts/dev', params.slug)
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      post: post
    }
  }
}
