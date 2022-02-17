import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/core/Button/Button'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Link href={'sample-page'} passHref={true}>
        <Button>Sample Page</Button>
      </Link>
      <Link href={'sample-form'} passHref={true}>
        <Button>Sample Form</Button>
      </Link>
    </>
  )
}

export default Home
