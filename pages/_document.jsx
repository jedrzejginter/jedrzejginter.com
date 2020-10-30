import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import hoistStatics from 'hoist-non-react-statics';

function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default hoistStatics(Document, NextDocument)
