import React, { useState } from 'react';
import styles from './Guesses.module.css';
import Tile from '../../Tile/Tile';

const Guesses = ({guesses, addGuess}) => {
    const [input, setInput] = useState('');

    const onChange = (input) => {
        console.log("Input changed", input);
        setInput(input);
    }

    const onKeyPress = (button) => {
        console.log("Button pressed", button);
    }

    const layout = [
        'q w e r t y u i o p',
        'a s d f g h j k l',
        'z x c v b n m'
    ];

    const keyboard = layout.map((line, index) => (
        <div key={index}>
            {line.split(' ').map((l, i) => (
                <Tile key={i} letter={l} layout='keyboard' guessed={guesses.find(g => g === l)} addGuess={addGuess}/>
            ))}
        </div>
    ));

    return (
        <div className={styles.guesses}>
            {keyboard}
        </div>
    )
}

export default Guesses;