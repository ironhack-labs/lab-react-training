import './App.css';
import berlin from './data/berlin.json';
import IdCard from './components/IdCard.jsx';
import Greetings from './components/Greetings.jsx';
import Random from './components/Random.jsx';
import BoxColor from './components/BoxColour.jsx';
import CreditCard from './components/CreditCard.jsx';
import Rating from './components/Rating.jsx';
import DriverCard from './components/DriverCard.jsx';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard id={berlin[4]} />
      <h1>Greetings</h1>
      <Greetings lang={berlin[4].country}>{berlin[4].firstName}</Greetings>
      <h1>Random</h1>
      <Random min={1} max={6} />
      <h1>BoxColour</h1>
      <BoxColor r={10} g={20} b={50} />
      <h1>CreditCard</h1>
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
    </div>
  );
}

export default App;
