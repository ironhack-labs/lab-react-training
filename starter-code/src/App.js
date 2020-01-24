import React, { Component } from 'react';
import IdCard from './component/IdCard';
import Greetings from './component/Greetings';
import Random from './component/Random';
import BoxColor from './component/BoxColor';
import CreditCard from './component/CreditCard';
import LikeButton from './component/LikeButton';

class App extends Component {
  render() {

    

    return (
      <div className="App">
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
              lastName='Delores '
              firstName='Obrien'
              gender='female'
              height={172}
              birth={new Date("1988-05-11")}
              picture="https://randomuser.me/api/portraits/women/44.jpg"
            />

            
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

{/* Random Number */}
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>


{/* Color Compononent */}

        <BoxColor r={255} g={1} b={0} />
        <BoxColor r={128} g={255} b={0} />







{/* Credit Card Component */}
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




{/* State Like Button */}

<LikeButton/>
<LikeButton/>
      </div>



    );
  }
}

export default App;
