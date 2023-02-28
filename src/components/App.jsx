import './App.css';
import BoxColor from './BoxColor/BoxColor';
import Carousel from './Carousel/Carousel';
import ClickablePicture from './ClickablePicture/ClickablePicture';
import CreditCard from './CreditCard/Creditcard';
import Dice from './Dice/Dice';
import DriverCard from './DriverCard/DriverCard';
import Facebook from './Facebook/Facebook';
import Greetings from './Greetings/Greetings';
import IdCard from './IdCard/IdCard';
import LikeButton from './LikeButton/LikeButton';
import NumbersTable from './NumbersTable/NumbersTable';
import Random from './Random/Random';
import Rating from './Rating/Rating';

function App() {
  const CreditCardArr = [
    {
      type: "Visa",
      number: "0123456789018845",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "BNP",
      owner: "Maxence Bouret",
      bgColor: "#11aa99",
      color: "white",
    },
    {
      type: "Master Card",
      number: "0123456789010995",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "N26",
      owner: "Maxence Bouret",
      bgColor: "#eeeeee",
      color: "#222222",
    },
    {
      type: "Visa",
      number: "0123456789016984",
      expirationMonth: 12,
      expirationYear: 2019,
      bank: "Name of the Bank",
      owner: "Firstname Lastname",
      bgColor: "#ddbb55",
      color: "white",
    }
  ]
  const PersonArr = [
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

  ]
  const DriverCardArr = [
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

  const images = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]
  return (
    <div className="App">
      <IdCard person={PersonArr[0]} />
      <IdCard person={PersonArr[1]} />

      <hr />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <hr />

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <hr />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <hr />

      <div className='d-flex'>
        <CreditCard creditCard={CreditCardArr[0]} />

        <CreditCard creditCard={CreditCardArr[1]} />

        <CreditCard creditCard={CreditCardArr[2]} />
      </div>


      <hr />

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <hr />

      <DriverCard driver={DriverCardArr[0]} />
      <DriverCard driver={DriverCardArr[1]} />

      <hr />

      <LikeButton />
      <LikeButton />

      <hr />

      <ClickablePicture img='maxence.png' imgClicked='maxence-glasses.png' />

      <hr />

      <Dice />

      <hr />

      <Carousel images={images} />

      <hr />

      <NumbersTable limit={12} />

      <hr />

      <Facebook />
    </div>
  )
}

export default App;
