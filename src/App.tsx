import React from 'react';
import CyclingImages from './components/CyclingImages';
import Female1 from './images/female1.jpeg';
import Female2 from './images/female2.jpeg';
import Female3 from './images/female3.jpeg';
import Male1 from './images/male1.jpeg';
import Male2 from './images/male2.jpeg';

function App() {
  const usersImages = [Female1, Female2, Female3, Male1, Male2];

  return (
    <div className="App">
      <CyclingImages srcs={usersImages} />
    </div>
  );
}

export default App;
