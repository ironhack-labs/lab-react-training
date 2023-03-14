//import logo from './logo.svg';
import './App.css';

import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import ClickablePicture from './components/ClickablePicture';
import LikeButton from './components/LikeButton';

const person = {
  firstName: 'John',
  lastName: 'Doe',
  gender: 'male',
  height: 178,
  birth: new Date('1992-07-14'),
  picture: 'https://randomuser.me/api/portraits/men/44.jpg',
};

const personLang = 'fr';

const min = 1;
const max = 9;
const rgbColors = [0, 255, 0];

const creditCardInfo = {
  type: 'master',
  number: '0123456789016984',
  expirationMonth: 12,
  expirationYear: 2027,
  bank: 'Bank of America',
  owner: 'Test',
  bgColor: '#add8e6',
  color: 'white',
};

const rating = 5;

const driver = {
  name: 'travis Kalanick',
  rating: 4,
  car: 'Toyota Corolla Altis - CO42DE',
  img: 'https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428',
};

function App() {
  return (
    <div className="App">
      <IdCard person={person} />
      <Greetings lang={personLang} children={person.firstName} />
      <Random min={min} max={max} />
      <BoxColor r={rgbColors[0]} g={rgbColors[1]} b={rgbColors[2]} />
      <CreditCard
        type={creditCardInfo.type}
        number={creditCardInfo.number}
        expirationMonth={creditCardInfo.expirationMonth}
        expirationYear={creditCardInfo.expirationYear}
        bank={creditCardInfo.bank}
        owner={creditCardInfo.owner}
        bgColor={creditCardInfo.bgColor}
        color={creditCardInfo.color}
      />
      <Rating rate={rating} />
      <DriverCard
        name={driver.name}
        rating={driver.rating}
        img={driver.img}
        car={driver.car}
      />

      <div>
        <LikeButton />
      </div>

      <div>
        <ClickablePicture />
      </div>
    </div>
  );
}

export default App;
