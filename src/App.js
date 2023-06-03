/* eslint-disable react/jsx-no-comment-textnodes */
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
        {' '}
        <h1>IdCard</h1>
        <IdCard
          lastName="Papadopoulos"
          firstName="John"
          gender="male"
          height={198}
          birth={new Date('1989-01-08')}
          picture="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"
        />
        <IdCard
          lastName="Smith"
          firstName="Clara"
          gender="female"
          height={178}
          birth={new Date('1985-09-02')}
          picture="https://media.istockphoto.com/id/1144287292/photo/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses.jpg?s=612x612&w=0&k=20&c=cdW-kkerUEhV80xLvE-Jg8Zpf4sR5YTR2YiH3K5IkNQ="
        />
      </div>
      <h1>Greetings</h1>
      <Greetings lang="de">Maria</Greetings>
      <Greetings lang="fr">Pier</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <br />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={0} g={128} b={0} />
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
        bank="NCV"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="N26"
        owner="Natassa Tsapanidou"
        bgColor="#ddbb55"
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
