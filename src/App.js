import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import dee from './assets/images/dee.jpg';
//import masterCard from './assets/images/master-card.svg';
import visaCard from './assets/images/visa.png';

const personProperties = [
  {
    lastName: 'Kalstein',
    firstName: 'Diana',
    gender: 'female',
    height: 157,
    birth: new Date('1991-12-04'),
    picture: dee,
  },
];

const creditCardProperties = [
  {
    type: 'Visa',
    number: '0123456789018845',
    expirationMonth: 3,
    expirationYear: 2021,
    bank: 'BNP',
    owner: 'Maxence Bouret',
    bgColor: '#11aa99',
    color: 'white',
    picture: visaCard,
  },
  {
    type: 'Master Card',
    number: '0123456789010995',
    expirationMonth: 3,
    expirationYear: 2021,
    bank: 'N26',
    owner: 'Maxence Bouret',
    bgColor: '#eeeeee',
    color: '#222222',
    //picture: masterCard,
  },
  {
    type: 'Visa',
    number: '0123456789016984',
    expirationMonth: 12,
    expirationYear: 2019,
    bank: 'Name of the Bank',
    owner: 'Firstname Lastname',
    bgColor: '#ddbb55',
    color: 'white',
    picture: visaCard,
  },
];

function App() {
  return (
    <div className="App">
      <h2>ID Card</h2>

      <IdCard
        lastName={personProperties[0].lastName}
        firstName={personProperties[0].firstName}
        gender={personProperties[0].gender}
        height={personProperties[0].height}
        birth={personProperties[0].birth}
        picture={personProperties[0].picture}
      />
      <h2>Greetings</h2>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h2>Random</h2>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>BoxColor</h2>
      <div className="redBox">
        <BoxColor r={255} g={0} b={0} />
      </div>
      <div className="greenBox">
        <BoxColor r={128} g={255} b={0} />
      </div>

      <h2>Credit Card</h2>
      <div>
        <CreditCard
          type={creditCardProperties[0].type}
          number={creditCardProperties[0].number}
          expirationMonth={creditCardProperties[0].expirationMonth}
          expirationYear={creditCardProperties[0].expirationYear}
          bank={creditCardProperties[0].bank}
          owner={creditCardProperties[0].owner}
          bgColor={creditCardProperties[0].bgColor}
          color={creditCardProperties[0].color}
          picture={creditCardProperties[0].picture}
        />
        <CreditCard
          type={creditCardProperties[1].type}
          number={creditCardProperties[1].number}
          expirationMonth={creditCardProperties[1].expirationMonth}
          expirationYear={creditCardProperties[1].expirationYear}
          bank={creditCardProperties[1].bank}
          owner={creditCardProperties[1].owner}
          bgColor={creditCardProperties[1].bgColor}
          color={creditCardProperties[1].color}
          picture={creditCardProperties[1].picture}
        />
        <CreditCard
          type={creditCardProperties[2].type}
          number={creditCardProperties[2].number}
          expirationMonth={creditCardProperties[2].expirationMonth}
          expirationYear={creditCardProperties[2].expirationYear}
          bank={creditCardProperties[2].bank}
          owner={creditCardProperties[2].owner}
          bgColor={creditCardProperties[2].bgColor}
          color={creditCardProperties[2].color}
          picture={creditCardProperties[2].picture}
        />
      </div>
      <h2>Rating</h2>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
  );
}

export default App;
