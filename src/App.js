import './App.css';
import berlin from './data/berlin.json'
import IdCard from './components/IdCard.jsx';

function App() {
  return (
    <div className="App">
    <IdCard id = {berlin[0]}/>
    </div>
  );
}

export default App;