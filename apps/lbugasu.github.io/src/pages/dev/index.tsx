import Header from '../../components/header'
import { getFilesFromSrcDir } from '../../helpers/files'
import Link from 'next/link'

export default function Index(props) {
  return (
    <div>
      <p>This is the development environment Next.js runs in.</p>
      {props.posts.map(post => (
        <h3 key={post.slug}>
          <Link href={`/dev/${post.slug}`}>{post.title}</Link>
        </h3>
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
