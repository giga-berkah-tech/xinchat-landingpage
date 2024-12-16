import Document, { Head, Html, Main, NextScript } from 'next/document'
import i18nextConfig from '../../next-i18next.config'

class MyDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale

    return (
      <Html className="h-full bg-gray-50 antialiased" lang={currentLocale}>
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