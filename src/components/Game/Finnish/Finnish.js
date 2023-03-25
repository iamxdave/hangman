import React from 'react'
import styles from './Finnish.module.css'

const Finnish = ({condition, restart}) => {

  return (
    <div className={styles.background + ' ' + styles.hidden}>
      <text className={styles.finnish}>
        you won!
      </text>
      <a onClick={() => restart()}>play again</a>
    </div>
  )
}

export default Finnish