import './App.css';

import IdCard from './components/id-card/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/box-color/BoxColor';
import CreditCard from './components/credit-card/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/driver-card/DriverCard';
import LikeButton from './components/like-button/LikeButton';
import ClickablePicture from './components/clickable-picture/ClickablePicture';
import Dice from './components/dice/Dice';

const users = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const creditCards = [
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
];

const driverCards = [
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
  const idCardArray = [];
  for(let i = 0; i < users.length; i++){
    idCardArray.push(
      <IdCard
        lastName={users[i].lastName}
        firstName={users[i].firstName}
        gender={users[i].gender}
        height={users[i].height}
        birth={users[i].birth}
        picture={users[i].picture}
      />
    )
  }

  const creditCardsArray = [];
  for(let i = 0; i < creditCards.length; i++){
    creditCardsArray.push(
      <div className="col-3">
        <CreditCard
            type={creditCards[i].type}
            number={creditCards[i].number}
            expirationMonth={creditCards[i].expirationMonth}
            expirationYear={creditCards[i].expirationYear}
            bank={creditCards[i].bank}
            owner={creditCards[i].owner}
            bgColor={creditCards[i].bgColor}
            color={creditCards[i].color}
          />
      </div>
    )
  }

  const driverCardsArray = [];
  for(let i = 0; i < driverCards.length; i++){
    driverCardsArray.push(
      <DriverCard
        name={driverCards[i].name}
        rating={driverCards[i].rating}
        img={driverCards[i].img}
        car={{
          model: driverCards[i].car.model,
          licensePlate: driverCards[i].car.licensePlate
        }}
      />
    )
  }

  return (
    <div className="App">
      <div className="container">
        <h2>IdCard</h2>
        {idCardArray}
        
        <h2>Greetings</h2>
        <Greetings lang="de" className="p-2 mb-1">Ludwig</Greetings>
        <Greetings lang="fr" className="p-2 mb-1">François</Greetings>
        
        <h2>Random</h2>
        <Random min={5} max={6} className="p-2 mb-1"/>
        <Random min={2} max={100} className="p-2 mb-1"/>

        <h2>BoxColor</h2>
        <BoxColor r={255} g={0} b={0} className="px-5 py-4"/>
        <BoxColor r={128} g={255} b={0} className="px-5 py-4"/>

        <h2>CreditCard</h2>
        <div className="row">
          {creditCardsArray}
        </div>

        <h2>Rating</h2>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <h2>DriverCard</h2>
        {driverCardsArray}

        <h2>LikeButton</h2>
        <div className="d-flex justify-content-center mb-3">
          <LikeButton className="py-2 px-3 mx-2"/>
          <LikeButton className="py-2 px-3 mx-2"/>
          <LikeButton className="py-2 px-3 mx-2"/>
          <LikeButton className="py-2 px-3 mx-2"/>
        </div>

        <h2>ClickablePicture</h2>
        <ClickablePicture
          image='maxence.png'
          imageClicked='maxence-glasses.png'
        />

        <h2>Dice</h2>
        <Dice />
      </div>
    </div>
  );
}

export default App;
