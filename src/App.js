
import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import Boxcolor from './components/Boxcolor/Boxcolor';
import Creditcard from './components/Creditcard/Creditcard';

function App() {
  return (

    // IT_1

    <div className="App">
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

      {/* IT_2 */}
      <div>
        <Greetings language="es"> Marlon </Greetings>
        <Greetings language="ro"> Vlad </Greetings>
        <Greetings language="en"> Mike </Greetings>
      </div>

      {/* IT_3 */}

        <Random min="10" max="50" > </Random>

      {/* IT_4 */}

        <Boxcolor r={255} g={200} b={100}> </Boxcolor>
        <Boxcolor r={150} g={0} b={200}> </Boxcolor>
        <Boxcolor r={15} g={100} b={250}> </Boxcolor>


      {/* IT_5 */}

        <Creditcard
          type="Master Card"
          number="0085803938621842"
          expirationMonth={9}
          expirationYear={2026}
          bank="BBVA"
          owner="Pepe Linguini"
          bgColor="#ffc600"
          color="white"
        > </Creditcard>


    </div>

  
    

  )}

  export default App
