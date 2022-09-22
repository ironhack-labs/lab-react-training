import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import maxenceWithoutGlasses from './assets/images/maxence.png';
import maxenceWithGlasses from './assets/images/maxence-glasses.png';
import Dice from './components/Dice';

function App() {
  return (
    <div className="App">
      <h3 style={{ fontSize: '27px', border: '3px dotted black' }}>IdCard</h3>{' '}
      {/*Interation 1*/}
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={'1992-07-14'}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={'1988-05-11'}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h3 style={{ fontSize: '27px', border: '3px dotted black' }}>
        Greetings
      </h3>{' '}
      {/*Interation 2*/}
      <div>
        <Greetings lang={'de'} children={'Ludwig'} />
        <Greetings lang={'fr'} children={'François'} />
      </div>
      <h3 style={{ fontSize: '27px', border: '3px dotted black' }}>Random</h3>{' '}
      {/* Interation 3*/}
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <h3 style={{ fontSize: '27px', border: '3px dotted black' }}>
        BoxColors
      </h3>{' '}
      {/* Iteration 4 */}
      <BoxColor r={255} g={0} b={0}>
        rgb(255,0,0)
      </BoxColor>
      <BoxColor r={128} g={255} b={0}>
        rgb(128,255,0)
      </BoxColor>
      <h3 style={{ fontSize: '27px', border: '3px dotted black' }}>
        Credit Cards
      </h3>{' '}
      {/* Iteration 5 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          padding: '15px',
        }}
      >
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
      </div>
      <h3 style={{ fontSize: '27px', border: '3px dotted black' }}>Ratings</h3>{' '}
      {/* Iteration 6 */}
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h3 style={{ fontSize: '27px', border: '3px dotted black' }}>
        DriverCard
      </h3>{' '}
      {/* Iteration 7*/}
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://i.imgur.com/VlaFSiY.jpg"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://i.imgur.com/bPaTbxn.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <h3 style={{ fontSize: '27px', border: '3px dotted black' }}>
        Like Buttons
      </h3>{' '}
      {/* Iteration 8*/}
      <LikeButton />
      <LikeButton />
      <h3 style={{ fontSize: '27px', border: '3px dotted black' }}>
        Clickable Picture
      </h3>{' '}
      {/* Iteration 9*/}
      <ClickablePicture
        img={maxenceWithGlasses}
        imgClicked={maxenceWithoutGlasses}
      />
      <h3 style={{ fontSize: '27px', border: '3px dotted black' }}>Dice</h3>
      {/* Iteration 10*/}
      <Dice />
    </div>
  );
}

export default App;
