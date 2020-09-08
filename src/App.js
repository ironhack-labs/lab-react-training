import React from 'react';
import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating';

function App() {
  return (
    <div className="App">
      
        
        <p>
         <IdCard  
          lastName='Anthopoulos'
          firstName='Alexandros'
          gender='male'
          height={185}
          birth={new Date("1987-01-25")}
          picture="https://randomuser.me/api/portraits/men/44.jpg" />

        </p>
        <h1>Greetings</h1>
        <Greetings lang="en">Alex</Greetings>
        <Greetings lang="fr">Jacques</Greetings>
        
        <h1>Random</h1>
        <Random min={1} max={20}/>
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />

        <h1>CreditCard</h1>
        <CreditCard 
          type="Visa"
          number="123456789101112"
          expirationMonth={7}
          expirationYear={2021}
          bank="ABN AMRO"
          owner="Alexandros Anthopoulos"
          bgColor="#c0c0c0"
          color="white" />

        <CreditCard 
          type="Master Card"
          number="211101987654321"
          expirationMonth={8}
          expirationYear={2021}
          bank="Rabobank"
          owner="Alexandros Anthopoulos"
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
  );
}

export default App;
