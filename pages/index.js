import Head from 'next/head'
import fs from 'fs'
import path from 'path'

export default function Home({ html }) {
  return (
    <>
      <Head>
        <title>Home - Penantia – Shilajit</title>
        <meta name="description" content="Ionic minerals and fulvic acid in resin form. The delivery mechanism that standard mineral supplements cannot match." />
        <link rel="canonical" href="https://penantia.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://penantia.com/" />
        <meta property="og:title" content="Home - Penantia – Shilajit" />
        <meta property="og:description" content="Ionic minerals and fulvic acid in resin form. The delivery mechanism that standard mineral supplements cannot match." />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="Penantia" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export async function getStaticProps() {
  // Read the static HTML file we built
  const htmlPath = path.join(process.cwd(), 'public', 'index.html')
  // Extract body content only (everything between <body> tags)
  let html = ''
  try {
    const fullHtml = fs.readFileSync(htmlPath, 'utf8')
    const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i)
    if (bodyMatch) html = bodyMatch[1]
  } catch (e) {
    html = '<p>Loading...</p>'
  }
  return { props: { html } }
}
