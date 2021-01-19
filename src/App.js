import React from 'react';
import IdCard from './components/IdCard'
import Greeting from './components/Greeting'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <React.Fragment>
    <div>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
    </div>

    <div>
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
    </div>
    <div>
      <h4>Greetings</h4>
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>
      <Greeting lang="es">Bella</Greeting>
      <Greeting lang="en">Adam</Greeting>
    </div>

    <div>
      <h4>Random number</h4>
      <Random min={1} max={6}/>
      <Random min={5} max={100}/>
    </div>

    <div>
      <h4>Box Color</h4>
      <BoxColor r={850} g={15} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>

    <div>
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />
    </div>

  </React.Fragment>
  );
}

export default App;
