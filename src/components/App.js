import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';

function App() {
  return (
    <div className="App">
        <p>
          <h1>IdCard</h1> 
          <IdCard  
          lastName='Robson'
          firstName='Santos'
          gender='male'
          height={181}
          birth={new Date("1981-09-04")}
          picture="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-0/p206x206/74575651_2597664863589997_2029651297543651328_o.jpg?_nc_cat=100&_nc_sid=da31f3&_nc_ohc=a23hl9QxqYoAX--pDZW&_nc_ht=scontent.fcgh37-1.fna&_nc_tp=6&oh=442a4df3ee8977b9cdcb6ce31b8f77c2&oe=5F3D5DE3"/>
        </p>
        
        <h1>Greetings</h1>
        <Greetings lang="en">Ironhacker</Greetings> 

        <h1>Random</h1>
        <Random min={1} max={10}/>

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />

        <h1>CreditCard</h1>
        <CreditCard 
          type="Visa"
          number="123456789101112"
          expirationMonth={7}
          expirationYear={2021}
          bank="Bradesco"
          owner="Robson Santos"
          bgColor="#c0c0c0"
          color="white" />

        <CreditCard 
          type="Master Card"
          number="211101987654321"
          expirationMonth={8}
          expirationYear={2021}
          bank="NuBank"
          owner="Robson Santos"
          bgColor="#800080"
          color="#222222" />

        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      
        </div>

        
  )
}

export default App;
