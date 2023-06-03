import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <h1>Hello bello</h1>
      <div className="flex-container">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height="178"
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height="172"
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <Greetings lang="en" children="Ludwig" />
        <Greetings lang="fr" children="François" />
        <Random min={6} max={30}/>
        <Random min={1} max={100}/>
      </div>
    </div>
  );
}

export default App;
