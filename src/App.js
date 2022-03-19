import logo from './logo.svg';
import './App.css';
import { Iteration1 } from './components/Iteration1/Iteration1'
import { Iteration2 } from './components/Iteration2/Iteration2';
import { Iteration3 } from './components/Iteration3/Iteration3';
import { Iteration4 } from './components/Iteration4/Iteration4';
import { Iteration5 } from './components/Iteration5/Iteration5';
import { Iteration6 } from './components/Iteration6/Iteration6';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Iteration1 />
      <Iteration2 />
      <Iteration3 />
      <Iteration4 />
      <Iteration5 />
      <Iteration6 />
    </div>
  );
}

export default App;
