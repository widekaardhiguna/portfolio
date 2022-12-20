import "../styles/globals.css"
import type { AppProps } from "next/app"

import Head from "next/head"
import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"
import { globalStyles, theme } from "theme/config"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  globalStyles()

  return (
    <>
      <Head>
        <title>wideka - portfolio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
