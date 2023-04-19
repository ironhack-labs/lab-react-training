import './App.css';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
