import {React, useState, useEffect, useRef} from 'react'
import styles from './Start.module.css';
import video from '../../../assets/type.mp4'
import Tile from '../../Tile/Tile';


const Start = (props) => {
  const [password, setPassword] = useState('');
  const passwordRef = useRef('');
  const lastWordRef = useRef('');
  const tilesRef = useRef('');

  useEffect(() => {
    const handleKeyDown = (event) => {

      if(!lastWordRef.current || (lastWordRef.current.children.length <= 11)){

        if(event.keyCode >= 65 && event.keyCode <= 90){
          passwordRef.current += event.key;
          setPassword(passwordRef.current);
        }
      }

      if(event.keyCode == 32 && passwordRef.current.slice(-1) !== ' '){
        if(passwordRef.current[passwordRef.current.length - 1] !== ' ') {
          passwordRef.current += ' ';
          setPassword(passwordRef.current);
        }
      }

      if(event.key === 'Backspace'){
        passwordRef.current = passwordRef.current.slice(0,-1);
        setPassword(passwordRef.current);
      }

      if(event.key === 'Enter' && passwordRef.current !== ''){
        props.startHandler();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const passwordWords = password.split(' ').map((word, index) => (
    <span key={index} ref={lastWordRef} className={styles.word}>
      {word.split('').map((letter, index) => (
        <Tile key={index} letter={letter} layout='password'/>
      ))}
    </span>
  ));
  
  props.isPasswordHandler(passwordRef.current);

  return (
    <div className={styles.start}>
      {passwordRef.current === ''? (
        <video src={video} autoPlay muted height='200px'/>
      ) : (
        <div ref={tilesRef} className={styles.tiles}>
          {passwordWords}
          <div className={styles.underline}>x</div>
        </div>
      )}
    </div>
  );
};

export default Start