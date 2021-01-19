import React from 'react';
import './App.css';
import {IdCard} from './components/IdCard/IdCard';
import {Greetings} from './components/Greetings/Greetings';
import {Random} from './components/Random/Random';
import {BoxColor} from './components/BoxColor/BoxColor';
import {CreditCard} from './components/CreditCard/CreditCard';

function App() {
  return (
    <React.Fragment>
      <h2>Id Cards</h2>
        <IdCard image="https://randomuser.me/api/portraits/men/44.jpg" firstName="John" lastName="Doe" gender="male" height={178} birthday={ new Date("1992-07-14") } />
        <IdCard image="https://randomuser.me/api/portraits/women/44.jpg" firstName="Daina" lastName="Slezaite" gender="female" height={172} birthday={ new Date("1996-06-13") } />
      <h2>Greetings</h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">Michelle</Greetings>
      <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      <h2>BoxColor</h2>
        <BoxColor r={254} g={127} b={156} />
        <BoxColor r={177} g={156} b={217} />
      <h2>CreditCard</h2>
        <div className="cards-collection">
            <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bankName="BNP"
              owner="Maxence Bouret"
              bgColor="11aa99"
              textColor="ffffff" />
            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bankName="N26"
              owner="Maxence Bouret"
              bgColor="eeeeee"
              textColor="222222" />
            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bankName="CaixaBank"
              owner="Daina Slezaite"
              bgColor="ddbb55"
              textColor="ffffff" />
        </div>

    </React.Fragment>

  );
}

export default App;
