import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*-------------------------------------FIRST ITERATION----------------------------------------*/}
        <h1>IdCard</h1>
  <IdCard 
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard 
  lastName='Delores'
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
{/*-------------------------------------SECOND ITERATION----------------------------------------*/}
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
{/*-------------------------------------THIRD ITERATION----------------------------------------*/}
<h1>Random</h1>
<Random min={1} max={6}/>
<Random min={1} max={100}/>
{/*-------------------------------------FOURTH ITERATION----------------------------------------*/}
<h1>BoxColor</h1>
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
{/*-------------------------------------FOURTH ITERATION----------------------------------------*/}
<h1>CreditCard</h1>
<section style={{display:'flex',flexDirection:"row",justifyContent:'space-around',margin:'100px 0'}}>
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
  </section>
{/*-------------------------------------FIVETH ITERATION----------------------------------------*/}
<h1>Rating</h1>
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>
      </div>
    );
  }
}

export default App;
