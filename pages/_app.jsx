import NextApp from 'next/app'
import Head from 'next/head';
import hoistStatics from 'hoist-non-react-statics';

import '../public/css/styles.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jędrzej Ginter – jedrzejginter.com</title>
        <meta name="author" content="Jędrzej Ginter <dzeejj@gmail.com>" />
        <meta name="description" content="Personal website for Jędrzej Ginter, Javascript developer." />
        <meta name="theme-color" content="#261EAC" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default hoistStatics(App, NextApp)
