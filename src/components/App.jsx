// src/App.js
import './App.css';
import CreditCard from './CreditCard/CreditCard';
import Greetings from './Greetings/Greetings';
import './IdCard/IdCard';
import IdCard from './IdCard/IdCard';
import Random from './Random/Random';
import Rating from './Rating/Rating'
import DriverCard from './DriverCard/DriverCard';

// import logo from './imagenes/logo.png'

function App() {
  return (
    <div className="App">
      <IdCard
        lastName={'Doe'}
        firstName={'John'}
        gender={'male'}
        height={178}
        birth={new Date('1992-07-14')}
        imagen={'https://randomuser.me/api/portraits/men/44.jpg'}
      />
      <IdCard
        lastName={'Dolores'}
        firstName={'Obrian'}
        gender={'female'}
        height={172}
        birth={new Date('1988-05-11')}
        imagen={'https://randomuser.me/api/portraits/women/44.jpg'}
      />
      <Greetings lang={'de'}>Lugwig </Greetings>
      <Greetings lang={'fr'}>Francois </Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />


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
  type="MasterCard"
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
   
   <Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
      <Rating>5</Rating>
      
  <DriverCard
  name="Travis Kalanick"
 stars={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  stars={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>
  </div>
   
  );
}
export default App;
