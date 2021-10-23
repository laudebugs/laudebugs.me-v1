import Header from '../../components/header'

export default function Index({ props }) {
  return (
    <div>
      <Header {...props} />
      <p>This is the development environment Next.js runs in.</p>
    </div>
  )
}

export async function getStaticPaths() {
  const config = {}
  return {}
}

export const getStaticProps = async ({ params }) => {
  const config = {}
  return {
    props: {}
  }
}
