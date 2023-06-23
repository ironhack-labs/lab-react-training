import './App.css';
import IdCard from './components/IdCard';
import idData from './data/idData.json';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import creditCardData from './data/creditCardData.json';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import driverCardData from './data/driverCardData.json';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import img from './assets/images/maxence.png';
import imgClicked from './assets/images/maxence-glasses.png';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      {idData.map((idCard) => {
        return <IdCard idCard={idCard} />;
      })}

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>CreditCard</h1>
      {creditCardData.map((creditCard) => {
        return <CreditCard creditCard={creditCard} />;
      })}

      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1>DriverCard</h1>
      {driverCardData.map((driverCard) => {
        return <DriverCard driverCard={driverCard} />;
      })}

      <h1>LikeButton</h1>
      <LikeButton />

      <h1>ClickablePicture</h1>
      <ClickablePicture img={img} imgClicked={imgClicked} />

      <h1>Dice</h1>
      <Dice />

      <h1>Carousel</h1>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <h1>NumbersTable</h1>
      <NumbersTable limit={12} />

      <h1>FaceBook</h1>
      <FaceBook />
    </div>
  );
}

export default App;
