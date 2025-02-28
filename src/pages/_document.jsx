import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full bg-gray-50 antialiased scroll-smooth">
        <Head />
        <body className="flex h-full flex-col">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument