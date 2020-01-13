import React, { Component } from 'react';
import IdCard from './component/IdCard';
import Greetings from './component/Greetings';
import Random from './component/Random';
import BoxColor from './component/BoxColor';
import CreditCard from './component/CreditCard';
import Rating from './component/Rating';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <h3 className="title is-3">IdCard</h3>
        {/* TODO: Use the IdCard component */}
        <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <hr></hr>

        <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <hr></hr>

        <h3 className="title is-3">Greetings</h3>
        {/* TODO: Use the Greetings component */}
        <div><Greetings lang="de">Ludwig</Greetings></div>
        <hr></hr>
        <div><Greetings lang="fr">François</Greetings></div>
        
         <hr></hr>

         <h3 className="title is-3">Random</h3>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <hr></hr>

        <h3 className="title is-3">BoxColor</h3>

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <hr></hr>

        <h3 className="title is-3">CreditCard</h3>
        
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

        <hr></hr>

        <h3 className="title is-3">Rating</h3>

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <hr></hr>

      </div>
    );
  }
}

export default App;
