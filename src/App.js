import './App.css';
import IdCard from './components/idCard';
import Greeting from './components/Greetings';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Maxence from './assets/images/maxence.png';
import MaxenceGlasses from './assets/images/maxence-glasses.png';
import Dice from './components/Dice';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import MasterCard from './assets/images/master-card.svg';
import Visa from './assets/images/visa.png';

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
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CreditCard
          number="0123456744"
          bgColor="#11aa99"
          expirationMonth={12}
          expirationYear={2025}
          bank="N26"
          owner="Alexander Farmakis"
          type={MasterCard}
        />
        <CreditCard
          number="0123456744"
          bgColor="#222222"
          expirationMonth={12}
          expirationYear={2025}
          bank="INGDiba"
          owner="Alexander Farmakis"
          type={MasterCard}
        />
        <CreditCard
          number="0123456744"
          bgColor="#ddbb55"
          expirationMonth={12}
          expirationYear={2025}
          bank="Volksbank Berlin"
          owner="Alexander Farmakis"
          type={Visa}
        />
      </div>
    </div>
  );
}

export default App;
