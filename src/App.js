import React from 'react';
import './App.css';
import './CreditCard.css'
import IdCard from './IdCard';
import { LikeButton } from './LikeButton';
import {CreditCard} from './CreditCard'

function App() {
  return (
    <div>
      <div>
        <h1>Id Card</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height="178"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height="172"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <h1>Credit Card</h1>
      <div className="credit-card">
        <div className="credit-card-one">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth="3"
            expirationYear="2021"
            bank="BNP"
            owner="Maxence Bouret"
          />
        </div>

        <div className="credit-card-two">
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth="3"
            expirationYear="2021"
            bank="N26"
            owner="Maxence Bouret"
          />
        </div>

        <div className="credit-card-three">
          <CreditCard
            type="Visa"
            number="0123456789016984"
            eexpirationMonth="12"
            expirationYear="2019"
            bank="Name of the Bank"
            owner="Firstname Lastname"
            />
        </div>


      </div>
      <br/>
      <LikeButton/>
    </div>
  );
}

export default App;
