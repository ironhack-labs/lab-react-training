import logo from './logo.svg';
import visa from './assets/images/visa.png'
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

function App() {
  return (
    <div className="App">
      <div>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className="title">IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={1.78}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={1.72}
          birth={new Date('1993-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      <h1 className="title">Greetings</h1>
        <Greetings lang="de" text="Ludwig"></Greetings>
      </div>
      <h1 className="title">Random</h1>
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <h1 className="title">BoxColor</h1>
        <BoxColor r={255} g={0} b={0} hex="#ff0000"/>
        <BoxColor r={128} g={255} b={0} hex="#80ff00"/>
      </div>
      <h1 className="title">CreditCard</h1>
      <div className="creditCardDisplay">
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2023}
        bank="BNP"
        owner="Miguel Jesus"
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
      <h1 className="title">Rating</h1>
      <Rating rating={0} />
      <Rating rating={1.49} />
      <Rating rating={1.5} />
      <Rating rating={3} />
      <Rating rating={4} />
      <Rating rating={5} />
      <h1 className="title">DriverCard</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{ model: 'Toyota Corolla Altis', licensePlate: 'CO42DE' }}
      />
    </div>
  );
}

export default App;
