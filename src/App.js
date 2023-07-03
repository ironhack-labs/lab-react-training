import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import RandomNumber from './components/RandomNumber';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import { useState } from 'react';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import diceEmpty from './images/dice-empty.png';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import profilesData from '../src/data/berlin.json';
import SignupPage from './components/SignupPage';
import SingleColorPicker from './components/SingleColorPicker';
import RGBColorPicker from './components/RGBColorPicker';

function App() {
  const [likes, setLikes] = useState(0);
  const [photobomb, setPhotobomb] = useState(false);
  const [dice, setDice] = useState(diceEmpty);
  const profiles = profilesData;

  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greeting lang="de">Ludwig </Greeting>
      <Greeting lang="fr">François</Greeting>
      <RandomNumber min={1} max={6} />
      <RandomNumber min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={0} g={0} b={255} />
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

      <Rating children={0} />
      <Rating children={1.49} />
      <Rating children={1.5} />
      <Rating children={3} />
      <Rating children={4} />
      <Rating children={5} />

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://randomuser.me/api/portraits/men/44.jpg"
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

      <LikeButton likes={likes} setLikes={setLikes} />

      <ClickablePicture photoBomb={photobomb} setPhotobomb={setPhotobomb} />

      <Dice dice={dice} setDice={setDice} diceEmpty={diceEmpty} />

      <br></br>

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <br></br>

      <NumbersTable limit={12} />

      <br></br>

      <FaceBook profiles={profiles} />

      <br></br>
      <SignupPage />

      <br></br>

      <RGBColorPicker />
      <SingleColorPicker />
    </div>
  );
}

export default App;
