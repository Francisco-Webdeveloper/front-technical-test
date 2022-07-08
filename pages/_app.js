import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Vinissimus - front-end technical test</title>
        <meta name="description" content="Front-end technical test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
