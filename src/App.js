import './css/pico.min.css';
import './css/custom.css';
import CreditCard from './components/CreditCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import Rating from './components/Rating';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <h2>Iteration 6</h2>
      <div className="grid">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <h2>Iteration 5</h2>
      <div className="grid">
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

      <h2>Iteration 4</h2>
      <div className="grid">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <h2>Iteration 3</h2>
      <div className="grid">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <h2>Iteration 2</h2>
      <div className="grid">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Silvia</Greetings>
        <Greetings lang="en">Shaun 😉</Greetings>
        <Greetings>nameless Esperanto speaker</Greetings>
      </div>

      <h2>Iteration 1</h2>
      <div className="grid">
        <IdCard
          lastName="Doe"
          firstName="John"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
    </div>
  );
}

export default App;
