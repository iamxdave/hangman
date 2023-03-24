import { useState, useEffect } from 'react';
import styles from './Game.module.css';
import Start from './Start/Start';
import Hangman from './Hangman/Hangman';
import Guesses from './Guesses/Guesses';



const Game = () => {
    const [start, setStart] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const startHandler = () => {
        setStart(prev => !prev);
    }

    const isPasswordHandler = (password) => {
        setIsPassword(password === ''? false : true);
    }

    return (
        <div className={styles.game}>
            {!start &&
                <Start isPasswordHandler={isPasswordHandler} startHandler={startHandler}/>
            }
            {start && 
                <div>
                    <Hangman/>
                    <Guesses/>
                </div>
            }
            {isPassword && <a onClick={startHandler}>{start? 'Give up' : 'Start'}</a>}
        </div>
    );
}

export default Game;