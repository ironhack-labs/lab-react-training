import logo from './logo.svg';
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
      <h1>Iteration 1</h1>
      <IdCard 
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth='14/07/1992'
        picture='https://randomuser.me/api/portraits/men/44.jpg'
      />

      <IdCard 
        lastName='Obrien'
        firstName='Delores'
        gender='female'
        height={172}
        birth='11/05/1988'
        picture='https://randomuser.me/api/portraits/women/44.jpg'
      />

      <h1>Iteration 2</h1>
      <Greetings lang='de'>Ludwig</Greetings>
      <Greetings lang='fr'>Francois</Greetings>
      <Greetings lang='es'>Juan</Greetings>
      <Greetings lang='en'>John</Greetings>

      <h1>Iteration 3</h1>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <h1>Iteration 4</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1>Iteration 5</h1>
      <div className='cards'>
        <CreditCard 
          type='Visa'
          number='0123 4567 8901 8845'
          expirationMonth={3}
          expirationYear={2021}
          bank='BNP'
          owner='Maxence Bouret'
          bgColor='#11aa99'
          color='white'
        />

        <CreditCard 
          type='Master Card'
          number='0123 4567 8901 8845'
          expirationMonth={3}
          expirationYear={2021}
          bank='N26'
          owner='Maxence Bouret'
          bgColor='#eeeeee'
          color='#222222'
        />

        <CreditCard 
          type='Visa'
          number='0123 4567 8901 6984'
          expirationMonth={12}
          expirationYear={2019}
          bank='Name of the Bank'
          owner='Firstname Lastname'
          bgColor='#ddbb55'
          color='white'
        />
      </div>

      <h1>Iteration 6</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1>Iteration 7</h1>
      <DriverCard 
        name='Travis Kalanick'
        rating={4.2}
        img='https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428'
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE'
        }}
      />

      <DriverCard 
        name='Dara Khosrowshahi'
        rating={4.9}
        img='https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg'
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER'
        }}
      />
    </div>
  );
}

export default App;
