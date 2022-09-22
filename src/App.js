import './App.css';
import maxence from './assets/images/maxence.png';
import maxenceGlasses from './assets/images/maxence-glasses.png';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      {/* Iteration 1 | IdCard */}
      <h1 style={{ fontWeight: 'bold', margin: '2rem' }}>IdCard</h1>
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

      {/* Iteration 2 | Greetings */}
      <h1 style={{ fontWeight: 'bold', margin: '2rem' }}>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* Iteration 3 | Random */}
      <h1 style={{ fontWeight: 'bold', margin: '2rem' }}>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* Iteration 4 | BoxColor */}
      <h1 style={{ fontWeight: 'bold', margin: '2rem' }}>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* Iteration 5 | CreditCard */}
      <h1 style={{ fontWeight: 'bold', margin: '2rem' }}> CreditCard</h1>
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

      {/* Iteration 6 | Rating */}
      <h1 style={{ fontWeight: 'bold', margin: '2rem' }}> Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {/* Iteration 7 | DriverCard */}
      <h1 style={{ fontWeight: 'bold', margin: '2rem' }}> DriverCard</h1>
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

      {/* Iteration 8 | LikeButton */}
      <h1 style={{ fontWeight: 'bold', margin: '2rem' }}> LikeButton</h1>
      <LikeButton />

      {/* Iteration 9 | ClickablePicture */}
      <h1 style={{ fontWeight: 'bold', margin: '2rem' }}> ClickablePicture</h1>
      <ClickablePicture img={maxence} imgClicked={maxenceGlasses} />

      {/* Iteration 10 | Dice */}
      <h1 style={{ fontWeight: 'bold', margin: '2rem' }}> Dice</h1>
      <Dice />

      {/* Iteration 11 | Carousel */}
      <h1 style={{ fontWeight: 'bold', margin: '2rem' }}> Carousel</h1>
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
