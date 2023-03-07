import React from 'react';
import './App.css';

import Iteration1 from './iterations/iteration1';
import Iteration2 from './iterations/iteration2';
import Iteration3 from './iterations/iteration3';

function App() {
  return (
    <div className="App">
      <strong>ITERATION 1</strong>
      <Iteration1 />

      <strong>ITERATION 2</strong>
      <Iteration2 />

      <strong>ITERATION 3</strong>
      <Iteration3 />
    </div>
  );
}

export default App;
