import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/styles/stitches.config'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}}/>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
