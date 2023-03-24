import React from 'react'
import { SEO } from '../components'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <SEO 
        page={`Home`}
        description={`JasonK97\'s Next App Template`}
      />

      <div className={styles.page_wrapper}>

      </div>
    </>
  )
}
