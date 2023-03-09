import React from 'react';
import './App.css';

import Iteration1 from './iterations/iteration1';
import Iteration2 from './iterations/iteration2';
import Iteration3 from './iterations/iteration3';
import Iteration4 from './iterations/iteration4';
import Iteration5 from './iterations/iteration5';
import Iteration6 from './iterations/iteration6';
import Iteration7 from './iterations/iteration7';
import Iteration8 from './iterations/iteration8';
import Iteration9 from './iterations/iteration9';

function App() {
  return (
    <div className="App">
      <strong>ITERATION 1</strong>
      <Iteration1 />

      <strong>ITERATION 2</strong>
      <Iteration2 />

      <strong>ITERATION 3</strong>
      <Iteration3 />

      <strong>ITERATION 4</strong>
      <Iteration4 />

      <strong>ITERATION 5</strong>
      <Iteration5 />

      <strong>ITERATION 6</strong>
      <Iteration6 />

      <strong>ITERATION 7</strong>
      <Iteration7 />

      <strong>ITERATION 8</strong>
      <Iteration8 />

      <strong>ITERATION 9</strong>
      <Iteration9 />
    </div>
  );
}

export default App;
