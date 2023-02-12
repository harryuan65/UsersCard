import React, { useEffect, useRef, useState } from 'react';
import CyclingImages from './components/CyclingImages';
import Female1 from './images/female1.jpeg';
import Female2 from './images/female2.jpeg';
import Female3 from './images/female3.jpeg';
import Male1 from './images/male1.jpeg';
import Male2 from './images/male2.jpeg';
import styles from './App.module.css';

function App() {
  const usersImages = [Female1, Female2, Female3, Male1, Male2];
  const [runFerris, setRunFerris] = useState(false);
  const ferrisRef = useRef<NodeJS.Timer | null>(null);
  const [ferrisTick, setFerrisTick] = useState(0);
  useEffect(() => {
    if (runFerris) {
      ferrisRef.current = setInterval(() => {
        setFerrisTick((prevFerrisTick) => {
          return (prevFerrisTick + 1) % 360;
        });
      }, 10);
    } else if (ferrisRef.current) {
      clearInterval(ferrisRef.current);
    }
    return () => {
      if (ferrisRef.current) {
        clearInterval(ferrisRef.current);
      }
    };
  }, [runFerris]);
  return (
    <div className="App">
      <div className={styles.card}>
        <CyclingImages srcs={usersImages} tick={ferrisTick} />
        <div className={styles.messageContainer}>
          <h2 className={styles.title}>Looking for some inspiration?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vade Post
            me Satana! Exaudi Domine Patri.
          </p>
        </div>
        <button
          className={styles.button}
          onClick={() => setRunFerris(!runFerris)}
        >
          GO FERRIS, GO!
        </button>
      </div>
    </div>
  );
}

export default App;
