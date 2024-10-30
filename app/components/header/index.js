import React from 'react'
import { MdLocalMovies } from "react-icons/md";
import Link from 'next/link'
import styles from './styles.module.css'



const navData=[
  
  
  
  {li:"Movies"},
  {li:"Series"},
  {li:"Kids"},






]

const index = () => {
  return (
    <nav className={`${styles.nav} container fluid`}>

      {/* Logo Section */}
      <div className={styles.navWrapper}>

        <Link className={styles.logo} href="\">
        <MdLocalMovies />
        <p>Kuneri Film</p>
 
        </Link>


      {/* Link Section */}
      <div className={styles.navigationMenu}>
      {navData.map((data,key)=><Link  key={key} href="\">{data.li}</Link>)}
      </div>
    
      </div>
    </nav>
  )
}

export default index