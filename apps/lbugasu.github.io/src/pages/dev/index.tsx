import Header from '../../components/header'
import { getFilesFromSrcDir } from '../../helpers/files'

export default function Index(props) {
  return (
    <div>
      <Header {...props} />
      <p>This is the development environment Next.js runs in.</p>
      {props.posts.map(post => (
        <h1 key={post.title}>{post.title}</h1>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const filePosts = getFilesFromSrcDir('posts/dev')
  return {
    props: {
      initialColorMode: 'light',
      posts: filePosts
    }
  }
}
