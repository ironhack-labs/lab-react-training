import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard.js'
import Greetings from './components/Greetings.js'
import Random from './components/Random.js'
// import BoxColor from './components/BoxColor.js'

function App() {
  return (
    <div className="App" style={{margin: "5px"}}>
      <div>
        <h1 style={{textAlign: "left"}}>IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <h1 style={{textAlign: "left"}}>Greetings</h1>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">Francois</Greetings>
      </div>
      <h1 style={{textAlign: "left"}}>Random</h1>
      <div style={{textAlign:"left"}}>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      {/* <div>
        <BoxColor r={255} g={0} b={0} hex='ff0000' color='white'/>
        <BoxColor r={128} g={255} b={0} hex='80ff00' color='black'/>
      </div> */}
      {/* <div>
      <CreditCard
        type={true}
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type={false}
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCard
        type={true}
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />
      </div> */}

    </div>
  );
}

export default App;
