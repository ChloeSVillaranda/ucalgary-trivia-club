import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico?v=3" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
          <link rel="manifest" href="/manifest.json?v=3" />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
