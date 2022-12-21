import { Html, Head, Main, NextScript } from "next/document"
import { getCssText } from "../theme/config"
// import { getCssText } from '/theme/config';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <meta property="og:title" content="Wideka Ardhiguna Portfolio" />
        <meta property="og:url" content="https://wideka-dev.vercel.app" />
        <meta
          property="og:image"
          content="https://wideka-dev.vercel.app/thumbnail.png"
        />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="900" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
