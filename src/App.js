import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        img="https://randomuser.me/api/portraits/men/44.jpg"
        birthDate="1992-07-14"
      />
      <br />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        img="https://randomuser.me/api/portraits/women/44.jpg"
        birthDate="1988-05-11"
      />

      <Greetings lang='fr'>
        Idir
      </Greetings>
      <Greetings lang='de'>
        Arnold
      </Greetings>

      <Random min={1} max ={6}/>
      <Random min={10} max ={100}/>
    </div>
  );
}

export default App;
