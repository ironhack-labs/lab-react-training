import './App.css';
import IdCard from './idcard/IdCard';
import Greetings from './greetings/Greetings'
import Random from './random/Random'
import BoxColor from './boxcolor/BoxColor'

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={1.78}
        birth='1992-07-14'

        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={1.72}
        birth='1993-05-11'
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang='fr'>Peter!</Greetings>
      <Greetings lang='es'>Johanna</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={6} />

      <BoxColor r={150} g={100} b={180} />
      <BoxColor r={0} g={0} b={0} />

    </div>

  );
}

export default App;
