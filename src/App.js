import './App.css';
import BoxColor from './Component/BoxColor';
import CreditCard from './Component/CreditCard';
import DriverCard from './Component/DriverCard';
import Greetings from './Component/Greetings';
import IdCard from './Component/IdCard';
import Random from './Component/Random';
import Rating from './Component/Rating';

function App() {
  return (
    <div className="App">
      <IdCard
        firstName="Adrien"
        lastName="Deveaux"
        gender="male"
        height={170}
        birth={new Date('1992-01-09')}
        picture="https://fr.123rf.com/photo_27891780_jeune-cadre-dynamique-gestes-%C3%A0-l-appel.html"
      />
      <Greetings lang="de" children="Adrien" />
      <Greetings lang="en" children="Adrien" />
      <Greetings lang="es" children="Adrien" />
      <Greetings lang="fr" children="Adrien" />
      <Random min={1} max={50} />
      <BoxColor r={231} g={0} b={100} />
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
    </div>
  );
}

export default App;
