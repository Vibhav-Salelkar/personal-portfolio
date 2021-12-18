import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Courgette&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/media/title.png" /> 
        </Head>
        <body className="bg-gradient-to-r from-vsback to vs-back2 dark:from-dark-500 dark: to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
