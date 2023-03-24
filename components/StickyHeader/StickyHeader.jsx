import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import { logo, logoAlt } from './data'
import { ThemeChanger } from '../ThemeChanger'

export const StickyHeader = () => {
  return (
    <header className={styles.sticky_header}>
      <div className={styles.header_section}>
        {/* Remove this className prop when changing text to a logo */}
        <Link href='/' className={styles.header_link}>
          {/* <Image
            className={styles.header_image}
            src={logo}
            alt={logoAlt}
            height={100}
            width={100}
            priority
          /> */}
          LOGO
        </Link>
      </div>
      
      <div className={styles.header_section}>
        <Link href='/' className={styles.header_link}>
          Home
        </Link>
        <Link href='/about' className={styles.header_link}>
          About
        </Link>
      </div>
    </header>
  )
}
