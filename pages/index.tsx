import { Button } from "components"
import { MainLayout } from "layouts"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { NextPageWithLayout } from "./_app"

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Button size="normal">Test</Button>
    </div>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
