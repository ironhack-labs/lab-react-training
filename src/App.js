import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>

      <Random min={5} max={10} />
    </div>
  );
}

export default App;
