import React from 'react'
import Head from 'next/head'

import { siteName } from './data'

export const SEO = ({page, description}) => {
  return (
    <Head>
      <title>{page} | {siteName}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
