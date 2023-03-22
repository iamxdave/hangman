import React from 'react'
import styles from './Banner.module.css'
import video from '../../assets/banner.mp4'

const Banner = () => {
  return (
    <div className={styles.banner}>
        <video src={video} autoPlay muted/>
    </div>
  )
}

export default Banner