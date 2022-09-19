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

import maxence from './assets/images/maxence.png';
import maxenceGlasses from './assets/images/maxence-glasses.png';
import Dice from './components/Dice';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <h1 className="title">IdCard</h1>
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
      <h1 className="title">Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h1 className="title">Random</h1>
      <Random min={1} max={10} />
      <Random min={10} max={100} />
      <h1 className="title">BoxColor</h1>
      <BoxColor r={255} g={0} b={0} textColor="white" />
      <BoxColor r={128} g={255} b={0} textColor="black" />
      <h1 className="title">CreditCard</h1>
      <CreditCard
        type="Visa"
        number="0123 4567 8901 8845"
        expirationMonth={3}
        expirationYear={2021}
        bank=" BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123 4567 8901 0995"
        expirationMonth={3}
        expirationYear={2021}
        bank=" N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123 4567 8901 6984"
        expirationMonth={12}
        expirationYear={2019}
        bank=" NuBank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <h1 className="title">Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h1 className="title">DriverCard</h1>
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
      <h1 className="title">LikeButton</h1>
      <LikeButton />
      <LikeButton />
      <h1>Clickable Picture</h1>
      <ClickablePicture img={maxence} imgClicked={maxenceGlasses} />
      <div style={{ marginTop: '300px' }}>
        <h1>Dice</h1>
        <Dice />
      </div>
      <h1>Carousel</h1>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
    </div>
  );
}

export default App;
