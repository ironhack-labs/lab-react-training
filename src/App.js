import IdCard from './components/IdCard';
import './App.css';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Raiting from './components/Raiting';

function App() {
  return (
    <div className="App">
   <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture= 'https://randomuser.me/api/portraits/men/44.jpg'
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

  <Greetings lang="Hallo" name="Ludwig" ></Greetings>
  <Greetings lang="Hello" name="John"></Greetings>
  <Greetings lang="Ola" name="Horhe"></Greetings>
  <Greetings lang="Bonjour"name="François"></Greetings>
    
  <Random min={1} max={6}/>
  <Random min={1} max={100}/>

  <BoxColor r={255} g={0} b={0} />
  <BoxColor r={128} g={255} b={0} />

  <Raiting>
    <Star star={0}/>
    <Star star={1.49}/>
    <Star star={1.5}/>
    <Star star={4}/>
    <Star star={5}/>
    
  </Raiting>
    </div>

  
  );
}

export default App;
