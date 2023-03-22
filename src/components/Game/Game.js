import { useState, useEffect } from 'react';
import styles from './Game.module.css';
import Start from './Start/Start';
import Hangman from './Hangman/Hangman';
import Keyboard from './Keyboard/Keyboard';



const Game = () => {
    const [start, setStart] = useState(false);

    const startHandler = () => {
        setStart(prev => !prev);
    }


    return (
        <div className={styles.game}>
            {!start &&
                <Start/>
            }
            {start && 
                <div>
                    <Hangman/>
                    <Keyboard/>
                </div>
            }
            <button onClick={startHandler}>{start? 'Give up' : 'Start'}</button>
        </div>
    );
}

export default Game;