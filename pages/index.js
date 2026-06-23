import Head from 'next/head'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { TrustStrip, ProofSection, MechanismSection, BentoSection, ProcessSection, EthicsSection, ReviewsSection, BlogSection, CTABand, Footer } from '../components/Sections'

export default function Home() {
  return (
    <>
      <Head>
        <title>Penantia — Pure Himalayan Shilajit Resin | Australian Owned</title>
        <meta name="description" content="Ionic minerals and fulvic acid in resin form. The delivery mechanism that standard mineral supplements cannot match. Batch COA verified, heavy metal tested, Australian owned." />
        <link rel="canonical" href="https://penantia.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://penantia.com/" />
        <meta property="og:title" content="Penantia — Pure Himalayan Shilajit Resin" />
        <meta property="og:description" content="Ionic minerals and fulvic acid in resin form. The delivery mechanism that standard mineral supplements cannot match." />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="Penantia" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"Organization","name":"Penantia","url":"https://penantia.com",
          "sameAs":["https://www.instagram.com/penantia_official/","https://www.facebook.com/PenantiaOfficial/"],
          "contactPoint":{"@type":"ContactPoint","telephone":"+61-494-039-662","contactType":"customer service","email":"support@penantia.com"}
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"Product",
          "name":"Pure Himalayan Shilajit Resin (20g)",
          "description":"Hand-harvested at 15,000ft in Ladakh. 95.2% fulvic acid. Batch-tested by Australian laboratories.",
          "brand":{"@type":"Brand","name":"Penantia"},
          "offers":{"@type":"Offer","url":"https://penantia.com/product/pure-himalayan-shilajit-20g/","priceCurrency":"AUD","price":"120.00","availability":"https://schema.org/InStock"},
          "aggregateRating":{"@type":"AggregateRating","ratingValue":"4.5","reviewCount":"2"}
        })}} />
      </Head>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProofSection />
        <MechanismSection />
        <BentoSection />
        <ProcessSection />
        <EthicsSection />
        <ReviewsSection />
        <BlogSection />
        <CTABand />
      </main>
      <Footer />
    </>
  )
}
