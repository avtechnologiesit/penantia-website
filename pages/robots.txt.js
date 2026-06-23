export default function Robots() { return null }
export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type','text/plain')
  res.write(`User-agent: *\nAllow: /\n\nSitemap: https://penantia.com/sitemap.xml\n\nDisallow: /cart/\nDisallow: /my-account/\nDisallow: /checkout/\n`)
  res.end()
  return { props: {} }
}
