import './App.css';
import { IdCard } from './components/IdCard';
import { Greetings } from './components/Greetings';
import { Random } from './components/Random';
import { BoxColor } from './components/BoxColor';
import { CreditCard } from './components/CreditCard';
import { Rating } from './components/Rating';
import { DriverCard } from './components/DriverCard';
import { LikeButton } from './components/LikeButton';
import { ClickablePicture } from './components/ClickablePicture';
import { Dice } from './components/Dice';

import { Carousel } from './components/Carousel';
import { NumbersTable } from './components/NumbersTable';

import img from './assets/images/maxence.png';
import imgClicked from './assets/images/maxence-glasses.png';
import { FaceBook } from './components/FaceBook';
import { Signup } from './components/Signup';

const carousel1 = 'https://randomuser.me/api/portraits/women/1.jpg';
const carousel2 = 'https://randomuser.me/api/portraits/men/1.jpg';
const carousel3 = 'https://randomuser.me/api/portraits/women/2.jpg';
const carousel4 = 'https://randomuser.me/api/portraits/men/2.jpg';

const carouselImg = [carousel1, carousel2, carousel3, carousel4];

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14').toLocaleString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11').toLocaleString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Jorje</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

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

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />

      <LikeButton />

      <ClickablePicture img={img} imgClicked={imgClicked} />

      <Dice />

      <Carousel carousel={carouselImg} />

      <NumbersTable limit={12} />

      <FaceBook />

      <Signup />
    </div>
  );
}

export default App;
