const SITE_URL = 'https://penantia.com'
const staticPages = [
  { url:'/', priority:'1.0', changefreq:'weekly' },
  { url:'/shop/', priority:'0.9', changefreq:'weekly' },
  { url:'/blog/', priority:'0.9', changefreq:'daily' },
  { url:'/about-us/', priority:'0.8', changefreq:'monthly' },
  { url:'/contact-us/', priority:'0.6', changefreq:'monthly' },
  { url:'/product/pure-himalayan-shilajit-20g/', priority:'1.0', changefreq:'weekly' },
]
const blogSlugs = ['shilajit-benefits-for-women','shilajit-benefits-for-men','what-is-fulvic-acid','how-to-take-shilajit','shilajit-vs-ashwagandha','iron-deficiency-symptoms','himalayan-shilajit-high-altitude-sourcing','vitamin-d-deficiency-symptoms-australia','adrenal-fatigue-symptoms','shilajit-side-effects','why-am-i-always-tired-cellular-energy-explained','always-tired-despite-sleeping-explained','coq10-deficiency-symptoms-explained','chronic-fatigue-symptoms-explained','low-oestrogen-symptoms-explained','pms-symptoms-causes-relief','pmdd-symptoms-explained','perimenopause-symptoms-explained','nervous-breakdown-symptoms-what-helps-explained','stress-and-weight-gain-cortisol-mechanism-explained','symptoms-of-low-potassium','calcium-deficiency-symptoms','low-progesterone-symptoms','the-word-adaptogen-is-everywhere','you-have-never-been-properly-hydrated','weak-immune-system-symptoms-why-you-keep-getting-sick','symptoms-of-magnesium-deficiency','magnesium-glycinate-for-sleep','zinc-deficiency-symptoms','why-do-i-keep-waking-up-at-3am','your-supplement-label-is-not-lying-to-you','high-cortisol-symptoms-why-your-body-is-stuck-in-a-stress-cycle','sleep-deprivation-symptoms','the-human-body-was-designed-for-water','your-fitness-tracker-is-gaslighting-you']
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0]
  const s = staticPages.map(p => `<url><loc>${SITE_URL}${p.url}</loc><lastmod>${today}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`).join('')
  const b = blogSlugs.map(slug => `<url><loc>${SITE_URL}/blog/${slug}/</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`).join('')
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${s}${b}</urlset>`
}
export default function Sitemap() { return null }
export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type','text/xml')
  res.setHeader('Cache-Control','public, s-maxage=86400, stale-while-revalidate=43200')
  res.write(generateSitemap()); res.end()
  return { props: {} }
}
