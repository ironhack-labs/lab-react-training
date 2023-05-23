
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greeting';
import Random from './components/Random/Random';
import Color from './components/Color/Color'
import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';
import LikeBtn from './components/LikeBtn/LikeBtn'
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Dice from './components/Dice/Dice';
import Carrousel from './components/Carrousel/Carrousel';
import NumberTable from './components/NumbersTable/NumberTable'
import Facebook from './components/Facebook/Facebook'

const people = [
  {
    firstName: 'Manuel',
    lastName: 'Perez Prado',
    height: 180,
    gender: 'Male',
    birth: new Date("1994-05-16"),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg'

  },
  {
    firstName: 'Sandra',
    lastName: 'Gallego Montaño',
    gender: 'Female',
    heigth: 156,
    birth: new Date("1997-05-14"),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg'
  }
]

const cards = [
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
    type: "Master card",
    number: "01256789018425",
    expirationMonth: 4,
    expirationYear: 2023,
    bank: "BNP",
    owner: "Maanuel Perez",
    bgColor: "black",
    color: "red",
  }
]

const drivers = [
  {
    name: 'Manuel Perez',
    rating: 2,
    img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
    car: {
      model: "Audi A3",
      licensePlate: "BE33ER"
    }

  },
  {
    name: 'el amo',
    rating: 5,
    img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
    car: {
      model: "Mercedes clase C",
      licensePlate: "VR46"
    }

  }
]
const images = [
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg'
]


function App() {
  const color = <Color r={120} g={0} b={250}></Color>

  return (
    <div>
      <IdCard user={people[0]} />
      <IdCard user={people[1]} />
      <div className='greeting'>
        <Greetings lang={'es'} children={'Manuel'} />
        <br></br>
        <Greetings lang={'fr'} children={'Sandra'} />
      </div>
      <div className='greeting'>
        <Random min={4} max={20} ></Random>
      </div>
      <>
        <Color r={250} g={200} b={100} ></Color>
      </>
      <>
        <CreditCard card={cards[0]} ></CreditCard>
        <br />
        <CreditCard card={cards[1]} ></CreditCard>
      </>
      <>
        <Rating children={1}></Rating>
        <br />
        <Rating children={3}></Rating>
        <br />
        <Rating children={5}></Rating>
      </>
      <>
        <DriverCard driver={drivers[0]}></DriverCard>
        <br />
        <DriverCard driver={drivers[1]}></DriverCard>
      </>
      <>
        <LikeBtn></LikeBtn>
      </>
      <>
        <ClickablePicture></ClickablePicture>
      </>
      <>
        <Dice></Dice>
      </>
      <>
        <Carrousel pictures={images}></Carrousel>
      </>
      <>
        <NumberTable limit={10}></NumberTable>
      </>
      <>
        <Facebook></Facebook>
      </>

    </div>
  )
}

export default App;
