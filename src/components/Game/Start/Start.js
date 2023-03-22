import {React, useState, useEffect, useRef} from 'react'
import Tile from '../../Tile/Tile';
import styles from './Start.module.css';

const Start = (props) => {
  const [password, setPassword] = useState('');
  const passwordRef = useRef('');
  const lastWordRef = useRef('');
  const tilesRef = useRef('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      const maxTilesWidth = tilesRef.current.clientWidth;

      if(!lastWordRef.current || (lastWordRef.current.children.length <= 12 && maxTilesWidth < window.innerWidth * 0.9)){

        if(event.keyCode >= 65 && event.keyCode <= 90){
          passwordRef.current += event.key;
          setPassword(passwordRef.current);
        }
      }

      if(event.keyCode == 32){
        if(passwordRef.current[passwordRef.current.length - 1] !== ' ') {
          passwordRef.current += ' ';
          setPassword(passwordRef.current);
        }
      }

      if(event.key === 'Backspace'){
        passwordRef.current = passwordRef.current.slice(0,-1);
        setPassword(passwordRef.current);
      }
    };

    const handleResize = (event) => {
      const maxTilesWidth = tilesRef.current.clientWidth;
      
      if(maxTilesWidth > window.innerWidth * 0.9){
        passwordRef.current = '';
        lastWordRef.current = '';
        setPassword(passwordRef.current);
      }
    }

    window.addEventListener('resize', handleResize)

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const passwordWords = password.split(' ').map((word, index) => (
    <div key={index} ref={lastWordRef} className={styles.word}>
      {word.split('').map((letter, index) => (
        <Tile key={index} letter={letter}/>
      ))}
    </div>
  ));

  return (
    <div className={styles.start}>
      <div ref={tilesRef} className={styles.tiles}>
        {passwordWords}
      </div>
      <div>
        {password}
      </div>
      <div>Type letters</div>
    </div>
  );
};

export default Start