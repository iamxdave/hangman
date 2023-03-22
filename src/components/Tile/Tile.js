import React from 'react'
import styles from './Tile.module.css'

const Tile = (props) => {
    const key = props.key;
  
    return (
        <div className={styles.tile}>
            {props.letter}
        </div>
    )
}

export default Tile