import './App.css';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <Random min={3} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
