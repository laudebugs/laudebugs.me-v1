import Head from 'next/head'

function About() {
  return (
    <div>
      <Head>
        <title key="title">Lau de Bugs - About</title>
        <meta key="description" name="description" content="More about what I do." />
        <meta name="robots" content="index, follow" />
      </Head>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  )
}
export default About
