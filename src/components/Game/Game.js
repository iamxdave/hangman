import { useState, useEffect, useRef } from 'react';
import styles from './Game.module.css';
import Finnish from './Finnish/Finnish';
import Start from './Start/Start';
import Hangman from './Hangman/Hangman';
import Guesses from './Guesses/Guesses';



const Game = () => {
    const [start, setStart] = useState(false);
    const [password, setPassword] = useState('')
    const [guesses, setGuesses] = useState([]);
    const [mistakes, setMistakes] = useState(0);
    const lastWordRef = useRef("");

    const restart = () => {
      setStart(p => !p);
      setPassword('');
      setGuesses([]);
      setMistakes(0);
    }


    const addGuess = (letter) => {
      setGuesses(p => [...p, letter]);
    }

    useEffect(() => {
        const handleKeyDown = event => {

          if(start) {
            const letter = event.key
            const alreadyGuessed = guesses.find(guess => guess === letter);
            
            !alreadyGuessed && setGuesses(p => [...p, letter]);

            if(!alreadyGuessed && !password.split('').find(l => l === letter)) {
              setMistakes(p => p + 1);
            }

          } else {

            if(!lastWordRef.current || (lastWordRef.current.children.length <= 11)){
    
              if(event.keyCode >= 65 && event.keyCode <= 90){
                  setPassword(p => p + event.key);
              }

            }  
            if(event.keyCode === 32 && password.slice(-1) !== ' '){
              if(password[password.length - 1] !== ' ') {
                  setPassword(p => p + ' ');
              }
            }

            if(event.key === 'Backspace'){
                setPassword(p => p.slice(0,-1));
            }

            if (event.key === "Enter" && password !== "") {
              setStart(p => !p);
            }
          }
        };

        window.addEventListener("keydown", handleKeyDown);
        
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [start, password, guesses]);

    const win = (password && password.replace(/ /g,'').split('').every(l => guesses.includes(l)));
    const lose = mistakes > 5;
    const finnishMessage = win === true? 'win' : 'lose';

    return (
      <div className={styles.game}>
        {((win || lose) && start) && <Finnish condition={finnishMessage} restart={restart}/>}
        {start && <Hangman mistakes={mistakes}/>}
        <Start
          password={password}
          lastWordRef={lastWordRef}
          start={start}
          guesses={guesses}
        />
  
        {start && (
          <Guesses guesses={guesses} addGuess={addGuess}/>
        )}
        {password && !start && (
          <a onClick={() => setStart(p => !p)}>Start</a>
        )}
        {password && start && (
          <a onClick={() => restart()}>Restart</a>
        )}
      </div>
    );
  };

export default Game;