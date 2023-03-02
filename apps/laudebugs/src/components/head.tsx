import Head from 'next/head'

function HeadWithMetaTags({ frontMatter }) {
  return (
    <div>
      <Head>
        <title key="title">{frontMatter.title}</title>
        <meta key="meta-title" property="title" content={frontMatter.title} />
        <meta key="description" property="description" content={frontMatter.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.summary} />
        <meta property="og:image" content={frontMatter.image} />
        <meta property="og:url" content="PERMALINK" />
        <meta property="og:site_name" content="Lau de Bugs" />
        <meta name="twitter:title" content={frontMatter.title} />
        <meta name="twitter:description" content={frontMatter.summary} />
        <meta name="twitter:image" content={frontMatter.image} />
        <meta name="twitter:site" content="@laudebugs" />
        <meta name="twitter:creator" content="@laudebugs"></meta>
        <meta name="robots" content="index, follow" />
      </Head>
    </div>
  )
}

export default HeadWithMetaTags
