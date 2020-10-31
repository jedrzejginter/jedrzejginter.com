import NextApp from 'next/app'
import Head from 'next/head';
import hoistStatics from 'hoist-non-react-statics';

import '../public/css/styles.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jędrzej Ginter – jedrzejginter.com</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default hoistStatics(App, NextApp)
