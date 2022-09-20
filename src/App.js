import './App.css';
import BoxColors from './components/BoxColors/BoxColors';
import CreditCard from './components/Creditcard/CreditCard';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/Idcard/IdCard';
import Random from './components/Random/Random';
import masterCardLogo from './assets/images/master-card.png';
import visaLogo from './assets/images/visa.png';
import Rating from './components/Rating/Rating';
import Drivercard from './components/DriverCard/Drivercard';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import clickPic from './assets/images/maxence.png';
import clickPic2 from './assets/images/maxence-glasses.png';
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import Facebook from './components/FaceBook/Facebook';

const idArray = [
  {
    user: {
      firstname: 'John',
      lastname: 'Doe',
      gender: 'male',
      height: '178',
      birth: '1992-07-14',
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
  },
  {
    user: {
      firstname: 'Delores',
      lastname: 'Obrien',
      gender: 'female',
      height: '172',
      birth: '1988-05-11',
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
];

const creditCardArray = [
  {
    card: {
      id: 1,
      type: 'Visa',
      // number: '0123456789018845',
      number: '•••• •••• •••• 8845',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'BNP',
      owner: 'Maxence Bouret',
      bgColor: '#11aa99',
      color: '#fff',
      logo: `${visaLogo}`,
    },
  },
  {
    card: {
      id: 2,
      type: 'Master Card',
      // number: '0123456789010995',
      number: '•••• •••• •••• 0995',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'N26',
      owner: 'Maxence Bouret',
      bgColor: '#eeeeee',
      color: '#222222',
      logo: `${masterCardLogo}`,
    },
  },
  {
    card: {
      id: 3,
      type: 'Visa',
      number: '•••• •••• •••• 6984',
      // number: '0123456789016984',
      expirationMonth: 12,
      expirationYear: 2019,
      bank: 'Name of the bank',
      owner: 'Firstname Lastname',
      bgColor: '#ddbb55',
      color: '#fff',
      logo: `${visaLogo}`,
    },
  },
];

const driverCardArray = [
  {
    driver: {
      key: 1,
      name: 'Travis Kalanick',
      rating: 4.2,
      img: 'https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428',
      car: {
        model: 'Toyota Corolla Altis',
        licensePlate: 'COD42DE',
      },
    },
  },
  {
    driver: {
      key: 2,
      name: 'Dara Khosrowshahi',
      rating: 4.9,
      img: 'https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg',
      car: {
        model: 'Audi A3',
        licensePlate: 'BE33ER',
      },
    },
  },
];

function App() {
  return (
    <div className="App">
      <IdCard idCard={idArray[0]} />
      <IdCard idCard={idArray[1]} />
      <h1>Greetings:</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h1>Random:</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1>Colored Box:</h1>
      <BoxColors r={255} g={0} b={0} />
      <BoxColors r={128} g={255} b={0} />
      <h1>CreditCard</h1>
      {creditCardArray.map((newCard) => {
        return <CreditCard key={newCard.card.id} newCard={newCard} />;
      })}
      <h1>Rating:</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h1>Drivercard:</h1>
      {driverCardArray.map((newDriver) => {
        return <Drivercard key={newDriver.driver.key} newDriver={newDriver} />;
      })}
      <h1>LikeButton</h1>
      <LikeButton />
      <h1>Clickable Picture:</h1>
      <ClickablePicture clickPic={clickPic} clickPicGlasses={clickPic2} />
      <h1>Dice:</h1>
      <Dice />
      <h1>Carousel:</h1>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <h1>Facebook</h1>
      <Facebook />
    </div>
  );
}

export default App;
