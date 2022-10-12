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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
