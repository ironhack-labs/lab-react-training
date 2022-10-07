import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth='1992-07-14'
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth='1988-05-11'
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={10}/>
      <Random min={20} max={50}/>

      <BoxColor red={200} blue={100} green={50} />
      <BoxColor red={90} blue={100} green={50} />
    </div>


  );
}

export default App;
