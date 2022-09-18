import IdCard from './components/IdCard.jsx';
import './App.css';
import Greetings from './components/Greetings';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard.jsx';
import Rating from './components/Rating'
const idCardData = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function App() {
  const idCardItems = idCardData.map((ele) => {
    return <IdCard idCardData={ele} key={Math.random()} />;
  });

  return (
    <div className="App">
      {idCardItems}
      <Greetings>Léo</Greetings>
      <Random />
      <BoxColor />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <Rating>1.7</Rating>
    </div>
  );
}

export default App;
