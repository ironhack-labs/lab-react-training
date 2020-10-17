import React, { Component } from 'react';
import './App.css';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/boxcolor/BoxColor';
import CreditCard from './components/creditCard/CreditCard'

export default class App extends Component {
  render() {
   /*  const style = {
      WebkitTransition: 'all', // note the capital 'W' here
      msTransition: 'all',
      marginTop: 50,

      border: '2px solid black',
    }; */
    return (
      <div>
        <div>
          <h3>IdCard</h3>
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth="1992-07-14"
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth="1988-05-11"
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
        <div>
          <h3>Greetings</h3>
          <div>
            <Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>
          </div>
        </div>
        <div>
          <h3>Random</h3>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </div>
        <div>
          <h3>BoxColor</h3>
          <BoxColor
            // style={style}

            r={255}
            g={0}
            b={0}
          />
          <BoxColor style={{ height: 60 }} r={128} g={255} b={0} />
        </div>
        <div>
          <h3>Credit Card</h3>
          <div className="CreditCard">
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
        </div>
      </div>
    );
  }
}
