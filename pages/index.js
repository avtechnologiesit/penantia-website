import Head from 'next/head'
import fs from 'fs'
import path from 'path'

export default function Home({ bodyHtml }) {
  return (
    <>
      <Head>
        <title>Home - Penantia – Shilajit</title>
        <meta name="description" content="Ionic minerals and fulvic acid in resin form. The delivery mechanism that standard mineral supplements cannot match." />
        <link rel="canonical" href="https://penantia.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://penantia.com/" />
        <meta property="og:title" content="Home - Penantia – Shilajit" />
        <meta property="og:description" content="Ionic minerals and fulvic acid in resin form." />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="Penantia" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  )
}

export async function getStaticProps() {
  const htmlPath = path.join(process.cwd(), 'public', 'index.html')
  let bodyHtml = ''
  try {
    const full = fs.readFileSync(htmlPath, 'utf8')
    const m = full.match(/<body[^>]*>([\s\S]*)<\/body>/i)
    if (m) bodyHtml = m[1]
  } catch (e) {
    bodyHtml = '<p>Loading…</p>'
  }
  return { props: { bodyHtml } }
}
