import Head from 'next/head'

import GlobalCSS from '../../styles/global'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <GlobalCSS />

      <Head>
        <title>Product Hunt</title>
      </Head>

      <Header />

      <main>
        {children}
      </main>
    </>
  )
}