import type { NextPage } from 'next'
import Head from 'next/head'

import { oAuth2Client, scope } from 'chibatech-auth'
import Router from 'next/router'

type Props = {
  authUrl: string
}

const Home: NextPage = (props: Props) => {

  const onClick = () => {
    Router.push(props.authUrl)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>ChibaTech Auth Demo</title>
      </Head>

      <main>
        <button onClick={() => onClick()} className='bg-blue-300 shadow-md rounded-full px-6 py-3'>ログイン</button>
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scope
  })

  return {
    props: {
      authUrl: authUrl
    }
  }
}