import './App.css';
import Card from './Components/Card/Card';
import Greeting from './Components/Greeting/Greeting';
import Random from './Components/Random/Random';
import BoxColor from './Components/BoxColor/BoxColor';
import CreditCard from './Components/CreditCard/CreditCard';
import Rating from './Components/Rating/Rating';
import DriverCard from './Components/DriverCard/DriverCard';
import LikedButton from './Components/LikedButton/LikedButton';
import ClickablePicture from './Components/ClickablePicture/ClickablePicture';
import img from './assets/images/maxence.png'
import imgClicked from './assets/images/maxence-glasses.png'
import Dice from  './Components/Dice/Dice';

const data = [{
  lastName: 'Doe',
  firstName: 'John',
  gender: 'male',
  height: 178,
  birth: new Date("1992-07-14"),
  img: "https://randomuser.me/api/portraits/men/44.jpg"
}, {
  lastName: 'Delores ',
  firstName: 'Obrien',
  gender: 'female',
  height: 172,
  birth: new Date("1988-05-11"),
  img: "https://randomuser.me/api/portraits/women/44.jpg"
}]
const dataCreditCard = [
  {
    type: "Visa",
    number: "0123456789018845",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "BNP",
    owner: "Maxence Bouret",
    bgColor: "#11aa99",
    color: "white",
  }, {
    type: "Master Card",
    number: "0123456789010995",
    expirationMonth: 3,
    expirationYear: 2021,
    bank: "N26",
    owner: "Maxence Bouret",
    bgColor: "#eeeeee",
    color: "#222222"
  }, {
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



function App() {
  return (
    <div className="App">
      <div className='Card'>
        {data.map((cardInfo, index) => {
          return (
            <Card data={cardInfo} key={index} />
          )
        })
        }
        <hr />
      </div>
      <div className='Greeting'>
        <Greeting lang='de'> Ludwig</Greeting>
        <Greeting lang='es'> Pedro</Greeting>
        <Greeting lang='fr'> Françeis</Greeting>
        <Greeting lang='en'> John</Greeting>
      </div>
      <hr />
      <div className='Random'>
        <Random min={1} max={5} />
        <Random min={1} max={100} />
      </div>
      <hr />
      <div className='BoxColor'>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <hr />
      <div className='CreditCard'>
        {dataCreditCard.map((creditCardInfo, index) => {
          return (
            <CreditCard dataCreditCard={creditCardInfo} key={index} />
          )
        })
        }
      </div>
      <hr />
      <div className='Rating'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <hr />
      <div className='DriverLicense'>
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
      <hr />
      <div className='row g-0 my-2 mx-2'>
        <div className='d-flex flex-row- justify-content-between mt-2 px-2'>
          <LikedButton/>
        </div>
      </div>
      <hr/>
      <div className='row g-0 my-2 mx-2'>
        <div className='d-flex flex-row- justify-content-between mt-2 px-2'>
        <ClickablePicture
        img={img}
        imgClicked={imgClicked}
        />
        </div>
      </div>
      <hr />
      <div className='row g-0 my-2 mx-2'>
        <div className='d-flex flex-row- justify-content-between mt-2 px-2'>
          <Dice/>
        </div>
      </div>
    </div>
  );
}

export default App;
