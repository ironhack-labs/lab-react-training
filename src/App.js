import './App.css';
import Iteration1 from './Iteration1/iteration1';
import Iteration2 from './Iteration2/iteration2';
import Iteration3 from './Iteration3/iteration3';
import Iteration4 from './Iteration4/iteration4';
import Iteration5 from './Iteration5/iteration5';
import Iteration6 from './Iteration6/iteration6';
import Iteration7 from './Iteration7/iteration7';




function App() {
  return (
    <div className="globalContainer">
      <hr />
      <h3>ITERATION 1</h3>
      <Iteration1 />
      
      <hr/>
      <h3>ITERATION 2</h3>
      <Iteration2 />

      <hr />
      <h3>ITERATION 3</h3>
      <Iteration3 />

      <hr />
      <h3>ITERATION 4</h3>
      <Iteration4 />

      <hr />
      <h3>ITERATION 5</h3>
      <Iteration5 />

      <hr />
      <h3>ITERATION 6</h3>
      <Iteration6 />

      <hr />
      <h3>ITERATION 7</h3>
      <Iteration7 />

    </div>
  )
}

export default App;
