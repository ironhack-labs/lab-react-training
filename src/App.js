import './App.css';
import IdCard from './components/idCard';
import Greetings from './components/greetings';
import Random from './components/random';
import BoxColor from './components/boxColor';
import CreditCard from './components/creditCard';
import Rating from './components/rating';
import DriverCard from './components/driverCard';

const users = [
  {
    lastName:'Doe',
    firstName:'John',
    gender:'male',
    height:178,
    birth:"1992-07-14",
    picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName:'Delores',
    firstName:'Obrien',
    gender:'female',
    height:172,
    birth:"1988-05-11",
    picture:"https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const creditCards = [
  {
    type:"Visa",
    number:"0123456789018845",
    expirationMonth:3,
    expirationYear:2021,
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"white",
  },
  {
    type:"Master Card",
    number:"0123456789010995",
    expirationMonth:3,
    expirationYear:2021,
    bank:"N26",
    owner:"Maxence Bouret",
    bgColor:"#eeeeee",
    color:"#222222",
  },
  {
    type:"Visa",
    number:"0123456789016984",
    expirationMonth:12,
    expirationYear:2019,
    bank:"Name of the Bank",
    owner:"Firstname Lastname",
    bgColor:"#ddbb55",
    color:"white"
  }

]

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='cardList'>
          <p>IdCards</p>
          <IdCard user = {users[0]} />
          <IdCard user = {users[1]} />
        </div>

        <div className='greetingList'>
          <p>Greetings</p>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </div>
    
        <div className='randomList'>
          <p>Random</p>
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
        </div>

        <div className='boxColorList'>
          <p>Box Color</p>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>

        <div className='creditCard-section'>
          <p>Credit Cards</p>
          <div className='creditCardList'>
          <CreditCard creditCard = {creditCards[0]}/>
          <CreditCard creditCard = {creditCards[1]}/>
          <CreditCard creditCard = {creditCards[2]}/>
          </div>
        </div>

        
        <div className='ratingList'>
          <p>Rating</p>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>

        <div className='driverCardList'>
          <p>Driver Cards</p>
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }}
          />
          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }}
          />
        </div>




      </header>
    


    </div>
  );
}

export default App;
