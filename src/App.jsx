import './App.css';
import Greetings from './components/Greetings';
import Idcard from './components/Idcard';
import Random from './components/Random';
import berlinData from './data/berlin.json';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import CardItems from './components/CardItems';
import Rating from './components/Rating';

function App() {
  // console.log(berlinData)

  return (
    <div className="App">
      <div className="flex justify-center p-6 text-4xl text-bold">Id Card</div>
      <Idcard
        firstName={berlinData[0].firstName}
        lastName={berlinData[0].lastName}
        gender="Male"
        height={178}
        birth="1992-07-14"
        img={berlinData[0].img}
      />

      <Idcard
        firstName={berlinData[1].firstName}
        lastName={berlinData[1].lastName}
        gender="Male"
        height={181}
        birth="1991-03-12"
        img={berlinData[1].img}
      />
      <div className="flex justify-center p-6 text-4xl text-bold">
        Greetings
      </div>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <div className="flex justify-center p-6 text-4xl text-bold">Random</div>

      <Random min={1} max={10} />
      <div className="flex justify-center p-6 text-4xl text-bold">
        Box Color
      </div>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={0} g={40} b={255} />

      <div className="flex justify-center p-6 text-4xl text-bold">
        Credit Card
      </div>

      <CardItems>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2024}
          bank="BNP"
          owner="Austin Mazur"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Sabadell"
          owner="John Doe"
          bgColor="#ddbb55"
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
      </CardItems>
     <Rating prop={0}/> 
     <br />
     <Rating prop={1}/> 
     <br />
     <Rating prop={2}/> 
     <br />
     <Rating prop={3}/> 
     <br />
     <Rating prop={4}/> 
     <br />
     <Rating prop={5}/> 
    </div>
  );
}

export default App;
