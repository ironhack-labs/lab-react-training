import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';

function App() {
  return (
    <div>

      <div className="App">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="en">Charles</Greetings>
        <Greetings lang="es">Pedro</Greetings>
        <Greetings >User</Greetings>
      </div>
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div className='flex-row'>
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
      <div className='box'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
    </div>
  );
}

export default App;
