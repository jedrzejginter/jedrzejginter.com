import NextApp from 'next/app'
import { Head } from 'next/document';
import hoistStatics from 'hoist-non-react-statics';

import '../public/css/styles.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jędrzej Ginter</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default hoistStatics(NextApp, App)
