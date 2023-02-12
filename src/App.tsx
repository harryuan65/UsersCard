import React from 'react';
import Female1 from './images/female1.jpeg';
import Female2 from './images/female2.jpeg';
import Female3 from './images/female3.jpeg';
import Male1 from './images/male1.jpeg';
import Male2 from './images/male2.jpeg';
import Male3 from './images/male3.jpeg';
import styles from './App.module.css';

function App() {
  const allImages = [Female1, Female2, Female3, Male1, Male2, Male3, Male1];
  const usersImages = allImages.slice(0, 7); // experimenting with length
  const itemCountStyle = {
    '--item-count': usersImages.length,
    '--rotate-apply-adjustment': usersImages.length % 2 === 0 ? 0 : 1,
  } as React.CSSProperties;

  return (
    <div className="App">
      <div className={styles.wrapper} style={itemCountStyle}>
        <span
          id="referencePoint"
          style={{
            borderRadius: '50%',
            width: 30,
            height: 30,
            backgroundColor: 'black',
          }}
        ></span>
        {usersImages.map((src, i) => {
          const style = { '--i': i } as React.CSSProperties;
          return (
            <img
              alt={`img${i}`}
              src={src}
              className={styles.userImage}
              style={style}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
