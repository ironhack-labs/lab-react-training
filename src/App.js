import './App.css';
import BoxColour from './components/BoxColour/BoxColour';
import CreditCard from './components/CreditCard/CreditCard';
import DriverCard from './components/DriverCard/DriverCard';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/IdCard/IdCard';
import LikeButton from './components/LikeButton/LikeButton';
import Random from './components/Random/Random';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '20px',
      }}
    >
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
        firstName="O'Brien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="es">Calvin</Greetings>
      <Random min={1} max={100} />
      <BoxColour r={255} g={100} b={0} />
      <CreditCard
        type="Master Card"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#ddbb55"
        color="white"
      />
      <Rating fontSize="50px">0</Rating>
      <Rating fontSize="50px">1.49</Rating>
      <Rating fontSize="50px">2.5</Rating>
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
        rating={2.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3sdfdsf',
          licensePlate: 'BE33ER',
        }}
      />
      <LikeButton />
    </div>
  );
}

export default App;
