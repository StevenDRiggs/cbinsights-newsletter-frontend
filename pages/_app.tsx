import Head from 'next/head'
import Image from 'next/image'
import type { AppProps } from 'next/app'

import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="CB Insights newsletter, newsletter on emerging tech, newsletter on startups, newsletter on vc, cvc funding" />
        <meta name="description" content="The CB Insights newsletter is read by 600,000+ weekly to track disruptive startups, emerging industries and their investors &amp; acquirers." />
        <meta property='og:title' content='Newsletter on startups, VC and emerging tech &amp; industries | CB Insights' />
        <meta property='og:url' content='https://www.cbinsights.com/newsletter' />
        <meta property='og:site_name' content='CB Insights' />
        <meta property='og:description' content='The CB Insights newsletter is read by 600,000+ weekly to track disruptive startups, emerging industries and their investors &amp; acquirers.' />
        <meta property="og:image" content="http://www.cbinsights.com/marketing/img/twitter_avatar.jpeg" />
        <meta property='twitter:card' content='summary' />
        <meta property='twitter:site' content='@cbinsights' />
        <meta name="twitter:domain" content="CBInsights.com" />
        <meta property="twitter:account_id" content="110171914" />

        <title>Newsletter on startups, VC and emerging tech &amp; industries | CB Insights</title>

        <link rel="shortcut icon" href="https://www.cbinsights.com/images/favicon.png"/>
        <link rel="stylesheet" href="https://www.cbinsights.com/styles/main.marketing.min.css" />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="https://www.cbinsights.com/images/favicon.png" alt="CB Insights Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


export default MyApp
