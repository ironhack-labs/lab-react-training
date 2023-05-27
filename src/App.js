import './App.css';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import Rating from './components/Rating';

function App() {
  return (
    <div>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='non-binary'
        height={178}
        birth="20-08-1993"
        img="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth="20-08-1993"
        img="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="es">Pepe</Greetings>

      <Random 
        min={20}
        max={200} />

      <BoxColor
        r={255}
        g={0}
        b={0} />

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

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4.2</Rating>
      <Rating>5</Rating>
</div>

  );
}

export default App;
