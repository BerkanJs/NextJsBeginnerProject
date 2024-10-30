import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'






const index = () => {
  return (
    <footer className={styles.footer}>
      Made with LOVE by &nbsp; 
      <Link href="https://github.com/BerkanJs" target='_blank'>
        Berkan Özçelik
      </Link>







    </footer>
  )
}

export default index