import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import styles from '@/styles/Home.module.css'

import { gitHubLink, emailLink, currentYear } from './data'

export const FooterContainer = () => {
	return (
		<footer className={styles.footer_container}>
      <div className={styles.footer_text_container}>
        <p>
          &copy; {currentYear} JasonK97 Next.js Template. All Rights Reserved.
        </p>
      </div>

      <div className={styles.footer_link_container}>
        <Link href={gitHubLink} target='_blank'>
          <FaGithub size='1.5rem' style={{ color: 'white', marginRight: '15px' }}/>
        </Link>

        <Link href={emailLink} target='_blank'>
          <MdEmail size='1.5rem' style={{ color: 'white', marginRight: '15px' }}/>
        </Link>
      </div>
		</footer>
	)
}