import React from 'react'
import styles from './styles.module.css'
const Skeleton = ({width,height}) => {
  return (
    <div className={styles.skleton} style={{width,height}}>Skeleton</div>
  )
}

export default Skeleton