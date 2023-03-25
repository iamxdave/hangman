import {React, useState, useEffect, useRef} from 'react'
import styles from './Start.module.css';
import video from '../../../assets/type.mp4'
import Tile from '../../Tile/Tile';


const Start = ({password, lastWordRef, start, guesses}) => {

  const passwordWords = password.split(" ").map((word, index) => (
    <span key={index} ref={lastWordRef} className={styles.word}>
      {word.split("").map((l, i) => (
        <Tile key={i} letter={l} layout="password" start={start} guessed={guesses.find(g => g === l)}/>
      ))}
    </span>
  ));

  return (
    <div className={styles.start}>
      {password === "" ? (
        <video src={video} autoPlay muted height="200px" />
      ) : (
        <div className={styles.tiles}>
          {passwordWords}
          {!start && <div className={styles.underline}>x</div>}
        </div>
      )}
    </div>
  );
};

export default Start