import React from 'react'
import styles from './Tile.module.css'

const Tile = ({ind, letter, layout, start, guessed, addGuess}) => {

    let classes = '';

    if(layout === 'password') {
        classes = ((start && !guessed)? styles['transparent'] + ' ' : '') + styles[layout];
    } else if (layout === 'keyboard') {
        classes = (guessed? styles['guessed'] + ' ' : '') + styles[layout];
    }
    return (
        <span onClick={() => addGuess(letter)} className={classes}>
            {letter}
        </span>
    )
}

export default Tile