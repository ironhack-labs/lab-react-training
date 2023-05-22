import logo from './logo.svg';
import './App.css';
import User from './components/IdCard/IdCard';
import Greetings from './components/lenguague/Greetings'
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';

const users = [
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
]

const card = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white"
  },
  {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222"
  },
  {
    type: "Visa",
    number: "0123456789016984",
    expirationMonth: 12,
    expirationYear: 2019,
    bank: "Name of the Bank",
    owner: "Firstname Lastname",
    bgColor: "#ddbb55",
    color: "white"
  }

]
const driverCard = [
  {
    name: "Travis Kalanick",
    rating: 4.2,
    img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
    car: {
      model: "Toyota Corolla Altis",
      licensePlate: "CO42DE"
    }
  },
  {
    name: "Dara Khosrowshahi",
    rating: 4.9,
    img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car: {
      model: "Audi A3",
      licensePlate: "BE33ER"
    }
  }
]


function App() {
  return (
    <body style={{ margin: 30 }}>
      <User user={users[0]} />
      <User user={users[1]} />
      <Greetings text="Paco" lang="en" />
      <Greetings text="Paco" lang="fr" />
      <Greetings text="Paco" lang="it" />

      <Random min={1} max={14} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={155} b={0} />

      <div className="card-main">
        <CreditCard card={card[0]} />
        <CreditCard card={card[1]} />
        <CreditCard card={card[2]} />
      </div>
      <h2>Rating</h2>
      <Rating rating={0}>0</Rating>
      <Rating rating={1.49}>1.49</Rating>
      <Rating rating={1.5}>1.5</Rating>
      <Rating rating={3}>3</Rating>
      <Rating rating={4}>4</Rating>
      <Rating rating={5}>5</Rating>
      <h2>Driver Card</h2>
      <DriverCard driverCards={driverCard[0]} />
      <DriverCard driverCards={driverCard[1]} />


    </body>

  );
}

export default App;
