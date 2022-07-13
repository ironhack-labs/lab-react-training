import './App.css';
import IdCard from './components/idCard';
import Greeting from './components/Greetings';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Maxence from './assets/images/maxence.png';
import MaxenceGlasses from './assets/images/maxence-glasses.png';
import Dice from './components/Dice';
import Random from './components/Random';

const personIDs = [
  {
    lastName: 'Farmakis, ',
    firstName: 'Alexander',
    gender: 'male',
    height: 184,
    birth: '1997-03-29',
  },
  {
    lastName: 'Mustermann, ',
    firstName: 'Friedrich',
    gender: 'male',
    height: 175,
    birth: '1970-05-05',
  },
];

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <IdCard card={personIDs[0]} />
        <IdCard card={personIDs[1]} />
      </div>
      <Greeting lang="fr">Alexander</Greeting>
      <LikeButton />
      <ClickablePicture img={Maxence} imgClicked={MaxenceGlasses} />
      <Dice />
      <div style={{ fontWeight: 'bold' }}>
        <Random min={1} max={6} />
      </div>
      <div style={{ fontWeight: 'bold' }}>
        <Random min={1} max={100} />
      </div>
    </div>
  );
}

export default App;
