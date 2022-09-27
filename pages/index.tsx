import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../coponents/Feed'
import Sidebar from '../coponents/Sidebar'
import Widgets from '../coponents/Widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>

        <Sidebar />

        <Feed />


       <Widgets />

      </main>
    </div>
  )
}

export default Home
