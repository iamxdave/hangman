import React from 'react'
import styles from './Tile.module.css'

const Tile = (props) => {
    const key = props.key;
    const layout = props.layout;

    return (
        <span className={styles[layout]}>
            {props.letter}
        </span>
    )
}

export default Tile