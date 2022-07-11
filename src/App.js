import './App.css';
import IdCard from './components/idCard';
import Greeting from './components/Greetings';

const personIDs = [
  {
    lastName: 'Farmakis, ',
    firstName: 'Alexander',
    gender: 'male',
    height: 184,
    birth: '1997-03-29',
    picture:
      'https://image.geo.de/30042236/t/HB/v3/w1440/r0/-/giraffe-gross-jpg--17137-.jpg',
  },
  {
    lastName: 'Mustermann, ',
    firstName: 'Friedrich',
    gender: 'male',
    height: 175,
    birth: '1970-05-05',
    picture:
      'https://image.geo.de/30042236/t/HB/v3/w1440/r0/-/giraffe-gross-jpg--17137-.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <IdCard card={personIDs[0]} />
      <IdCard card={personIDs[1]} />
      <Greeting lang="fr">Alexander</Greeting>
    </div>
  );
}

export default App;
