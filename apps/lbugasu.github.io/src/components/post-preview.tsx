import Image from 'next/image'

const PostPreview = ({ post }) => {
  return (
    <div>
      <h5>{post.title}</h5>
      <small>{post.publishedOn}</small>
      <div>
        <Image src={post.image} alt={post.title} width={150} height={150} />
        <p>{post.summary}</p>
      </div>
    </div>
  )
}

export default PostPreview
