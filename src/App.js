import './App.css';
import IdCard from './components/misc/IdCard/IdCard';
import Greetings from './components/misc/Greetings/Greetings';
import Random from './components/misc/Random/Random';
import BoxColor from './components/misc/BoxColor/BoxColor';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Cristiano'
        firstName='Ronaldo'
        gender='male'
        height={185}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Fernando '
        firstName='Alonso'
        gender='male'
        height={175}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="de">Ludwig</Greetings>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
