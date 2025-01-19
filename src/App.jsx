import "./App.css";
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

import LikeButton from './components/LikeButton';
import Emily from './assets/images/Emily.png';
import Glasses from './assets/images/glasses.png';
import ClickablePicture from './components/ClickablePicture';

function App() {
  return (
    <div className="App">
      {/* I1: Render IdCard components */}
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* I2: Greetings Examples */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* I3: Random Component Examples */}
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* I4: BoxColor Examples */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* I5: Credit Card */}
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
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

      {/* I6: Rating*/}
      <div>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      </div>


      {/* I8: Like Button */}
      <LikeButton />

      {/* I9: Clickable Picture */}
       <ClickablePicture
        img = {Emily}
        imgClicked = {Glasses}
      />

    </div>
  );
}

export default App;

