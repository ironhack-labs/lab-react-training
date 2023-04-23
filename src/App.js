import './App.css';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <BoxColor r={241} g={56} b={48} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
