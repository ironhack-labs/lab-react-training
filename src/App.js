import './App.css';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/IdCard/IdCard';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';

const cardsArray = [  
  {  
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: "1992-07-14",
    picture: "https://randomuser.me/api/portraits/men/9.jpg"  
  },
  {    
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: "1988-05-11",
    picture: "https://randomuser.me/api/portraits/women/44.jpg"    
  },  
];


function App() {
  return (
    <div className="App">
      <IdCard card={ cardsArray[0] }/>
      <IdCard card={ cardsArray[1] }/>
      <Greetings lang="de" >Ludwig</Greetings>
      <Greetings lang="fr" >François</Greetings>
      <Random min={6} max={15} />
      <Random min={1} max={10} />
      <BoxColor r={255} g={0} b={0} />
    </div>
  );
}

export default App;
