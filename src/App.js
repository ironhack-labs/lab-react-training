import React, { Component } from 'react';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'
import Rating from "./Rating"
import "./index.css"

class App extends Component {
  // const a = 10
  render() {
    // const b = 20
    return (
      <div className="App">
        <h1>IdCard</h1>
        <div className="first-square">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        </div>
        <div className="second-square">
        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        </div>
        
        {/* Check language: de, en, es, fr */}
        <h1>Greetings</h1>
        <div className="first-square">
        <Greetings 
        lang="Hallo"
        children="Ludwig"
        />
        </div>
        <div className="first-square">
        <Greetings 
        lang="Bonjour"
        children="François"
        />
        </div>

        <h1>Random</h1>
        <div className="first-square">
        <Random min={1} max={6}/>
        </div>
       <div className="first-square">
       <Random min={1} max={100}/>
       </div>
       
       <h1>BoxColor</h1>
        <div style={{background: "#ff0000", height: "80px", border: "1px solid black", marginBottom: "15px", textAlign:"center", color:"white"}}>
        <BoxColor r={255} g={0} b={0}/>
        </div>
       <div style={{background: "#80ff00", height: "80px", border: "1px solid black", textAlign:"center", color:"black"}}>
       <BoxColor r={128} g={255} b={0}/>
       </div>
       
       <h1>CreditCard</h1>
        <div className="container">
        <div style={{background: "#11aa99", marginRight: "20px", color: "white", width:"350px", height: "180px", borderRadius: "6px"}}>
          <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white" />
        </div>

          <div style={{background: "#eeeeee", marginRight: "20px", width:"350px", height: "180px", borderRadius: "6px"}}>
            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222" />
          </div>
          
          <div style={{background: "#ddbb55", color: "white", width:"350px", height: "180px", borderRadius: "6px"}}>
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
        </div>

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
