import styles from './App.module.css';
import Banner from './components/Banner/Banner';
import Game from './components/Game/Game';

function App() {
  return (
    <div className={styles.app}>
      <Banner/>
      <Game/>
    </div>
  );
}

export default App;
