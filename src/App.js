import React from 'react';
// import logo from './logo.svg';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';



import './App.css';

function App() {
  return (
    <div className="App">
 
 {/* -----iteration 1----- */}
 <h1>IdCard</h1>
      <IdCard
          lastName='Cocker'
          firstName='Joe'
          gender='male'
          height={170}
          birth={new Date("1944-05-20")}
          picture="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-134967-joe-cocker.jpg?w=306"
      />
       <IdCard
          lastName='Carey'
          firstName='Mariah'
          gender='female'
          height={165}
          birth={new Date("1970-03-27")}
          picture="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-134949-mariah-carey.jpg?w=306"
      />

<hr></hr>
 {/* -----iteration 2----- */}
<h1>Greetings</h1>
       <Greetings lang="de">Ludwig</Greetings>
       <Greetings lang="fr">François</Greetings> 
    
<hr></hr>
  {/* Iteration 3 */}
  <h1>Random</h1>
  <Random min={1} max={6}/>
  <Random min={1} max={100} />

  <hr></hr>   
  {/* Iteration 4 */}    
   <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} color="rgb(255,0,0)" />
      <BoxColor r={128} g={255} b={0} color="rgb(128,255,0)"/>

<hr></hr>    
  {/* Iteration 5 */}
  <h1>CreditCard</h1>
      <div className="card-container">
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
  );
}

export default App;
