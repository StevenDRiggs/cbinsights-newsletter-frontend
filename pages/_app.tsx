import Head from 'next/head'
import Image from 'next/image'
import type { AppProps } from 'next/app'

import Navbar from '../components/navbar'

import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="CB Insights newsletter, newsletter on emerging tech, newsletter on startups, newsletter on vc, cvc funding" />
        <meta name="description" content="The CB Insights newsletter is read by 600,000+ weekly to track disruptive startups, emerging industries and their investors &amp; acquirers." />
        
        <title>Newsletter on startups, VC and emerging tech &amp; industries | CB Insights</title>

        <link rel="shortcut icon" href="https://www.cbinsights.com/images/favicon.png" />
        <link rel="prerender" href="https://www.cbinsights.com/sales" />
        <link rel="dns-prefetch" href="https://platform.twitter.com/" />
        <link rel="dns-prefetch" href="https://use.typekit.net/" />

        <meta property='og:title' content='Newsletter on startups, VC and emerging tech &amp; industries | CB Insights' />
        <meta property='og:url' content='https://www.cbinsights.com/newsletter' />
        <meta property='og:site_name' content='CB Insights' />
        <meta property='og:description' content='The CB Insights newsletter is read by 600,000+ weekly to track disruptive startups, emerging industries and their investors &amp; acquirers.' />
        <meta property="og:image" content="http://www.cbinsights.com/marketing/img/twitter_avatar.jpeg" />

        <meta property='twitter:card' content='summary' />
        <meta property='twitter:site' content='@cbinsights' />
        <meta name="twitter:domain" content="CBInsights.com" />
        <meta property="twitter:account_id" content="110171914" />
      </Head>

      <Navbar />
    </div>
  )
}


export default MyApp
