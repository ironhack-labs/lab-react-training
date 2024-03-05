import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import DriverCard from './components/DriverCard';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <h2>IdCard</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        img="https://randomuser.me/api/portraits/men/44.jpg"
        birthDate="1992-07-14"
      />
      <br />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        img="https://randomuser.me/api/portraits/women/44.jpg"
        birthDate="1988-05-11"
      />
      <h2>Greetings</h2>
      <Greetings lang="fr">Idir</Greetings>
      <Greetings lang="de">Arnold</Greetings>

      <h2>Random</h2>
      <Random min={1} max={6} />
      <Random min={10} max={100} />

      <h2>BoxColor</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h2>CreditCard</h2>
      <div className="credit-cards-container">
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
      <h2>Ratings</h2>
      <Rating>0</Rating>
      <Rating>1</Rating>
      <Rating>2</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h2>DriverCard</h2>
      <DriverCard
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        name="Travis Kalanick"
        rating={4.2}
        car={{ model: 'Toyota Corolla Altis', license: 'CO42DE' }}
      />
      <DriverCard
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        name="Dara Khosrowshahi"
        rating={4.9}
        car={{ model: 'Audi A3', license: 'BE33ER' }}
      />
    </div>
  );
}

export default App;
