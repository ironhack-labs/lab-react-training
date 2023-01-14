import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import personsArray from "./iteration1.json"
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import { Divider } from 'antd';
import BoxColor from './components/BoxColor/BoxColor';


function App() {
  return (
    <div className="App">
    <Divider>Iteration 1</Divider>

    <IdCard personsArray={personsArray}/>
    
      <Divider>Iteration 2</Divider>

      <Greetings  lang="fr"> François</Greetings>
      <Greetings lang="ger"> Hans</Greetings>
      
      <Divider>Iteration 3</Divider>

      <div className='flex'>
      <p className='number-random'>Generate a random number between 5 & 25:<span className='randomizer'> <Random min={5} max={25}/> </span></p>
      <p className='number-random'>Generate a random number between 0 & 100:<span className='randomizer'><Random min={0} max={100}/> </span> </p>
      </div>
      <Divider>Iteration 4</Divider>
      <BoxColor r={152} g={250} b={45}/>
      <BoxColor r={12} g={50} b={122}/>
    </div>
  );
}

export default App;
