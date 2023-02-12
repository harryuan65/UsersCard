import React from 'react';
import CyclingImages from './components/CyclingImages';
import Female1 from './images/female1.jpeg';
import Female2 from './images/female2.jpeg';
import Female3 from './images/female3.jpeg';
import Male1 from './images/male1.jpeg';
import Male2 from './images/male2.jpeg';
import styles from './App.module.css';

function App() {
  const usersImages = [Female1, Female2, Female3, Male1, Male2];

  return (
    <div className="App">
      <div className={styles.card}>
        <CyclingImages srcs={usersImages} />
        <div className={styles.messageContainer}>
          <h2 className={styles.title}>Looking for some inspiration?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vade Post
            me Satana! Exaudi Domine Patri.
          </p>
        </div>
        <button className={styles.button}>SEE FEATURED CREATIVES</button>
      </div>
    </div>
  );
}

export default App;
