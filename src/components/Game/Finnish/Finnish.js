import React from 'react'
import styles from './Finnish.module.css'

const Finnish = ({condition, restart}) => {
  return (
    <div className={styles.background + ' ' + styles.hidden}>
      <div className={styles.finnish}>
        {condition === 'win'? 'You won!' : 'You lost!'}
      </div>
      <a onClick={() => restart()}>play again</a>
    </div>
  )
}

export default Finnish