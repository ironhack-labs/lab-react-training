import './App.css';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';

import img from './assets/images/maxence.png';
import imgClicked from './assets/images/maxence-glasses.png';
import face0 from './assets/images/dice-empty.png';
import face1 from './assets/images/dice1.png';
import face2 from './assets/images/dice2.png';
import face3 from './assets/images/dice3.png';
import face4 from './assets/images/dice4.png';
import face5 from './assets/images/dice5.png';
import face6 from './assets/images/dice6.png';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Belin "
        firstName="Valérian"
        gender="male"
        height={170}
        birth={new Date('1997-08-08')}
        picture="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/272389698_2328815750605592_180345183844009556_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vq9qIBE2Z6IAX8D1wlP&_nc_ht=scontent-lhr8-1.xx&oh=00_AT_qhF2I9lZnch1x8OkF8vwnPB6lstLb-cvPS_mTBIQxGw&oe=62BA6A1B"
      />
      <Greetings lang="de">Valérian</Greetings>
      <Greetings lang="en">Valérian</Greetings>
      <Greetings lang="es">Valérian</Greetings>
      <Greetings lang="fr">Valérian</Greetings>
      <Random min={2} max={7} />
      <Random min={42} max={2048} />
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
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
        name="Mario"
        rating={4.2}
        img="https://play-lh.googleusercontent.com/7Z4x3nLGglKbIDMafIPmdFUB9zpwu-k3HHbIJ1DeWz-4HCp9IFfCzk5r1JsmyiT85y1v"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />

      <DriverCard
        name="Luigi"
        rating={4.9}
        img="http://www.smashbros.com/images/og/luigi.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <LikeButton />
      <ClickablePicture img={img} imgClicked={imgClicked} />
      <Dice
        face0={face0}
        face1={face1}
        face2={face2}
        face3={face3}
        face4={face4}
        face5={face5}
        face6={face6}
      />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <NumbersTable limit={12} />
    </div>
  );
}

export default App;
