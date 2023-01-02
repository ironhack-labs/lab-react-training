import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import { useState } from 'react';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  const [lang, setMessage] = useState('');
  const [randomNumber, setRandom] = useState();


  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={1.78}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={1.72}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        />


        <Greetings lang={lang} setMessage={setMessage}/>
        <Random min={1} max={6} randomNumber={randomNumber} setRandom={setRandom}/>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        

        {/* <label for="pet-select">Choose a pet:</label>

<select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select> */}


    

    </div>

  );
}

export default App;
