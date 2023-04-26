import './App.css';
import NumbersTable from './components/NumbersTable';

function App() {
  return (
    <div className="App">
      <NumbersTable limit={12} />
    </div>
  );
}

export default App;
