import React from 'react';
// import logo from './logo.svg';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';





import './App.css';

function App() {
  return (
    <div className="App">
 
 {/* -----iteration 1----- */}
 <h1>1. IdCard</h1>
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
<h1>2. Greetings</h1>
       <Greetings lang="de">Ludwig</Greetings>
       <Greetings lang="fr">François</Greetings> 
    
<hr></hr>
  {/* Iteration 3 */}
  <h1>3. Random</h1>
  <Random min={1} max={6}/>
  <Random min={1} max={100} />

  <hr></hr>   
  {/* Iteration 4 */}    
   <h1>4. BoxColor</h1>
      <BoxColor r={255} g={0} b={0} color="rgb(255,0,0)" />
      <BoxColor r={128} g={255} b={0} color="rgb(128,255,0)"/>

<hr></hr>    
  {/* Iteration 5 */}
  <h1>5. CreditCard</h1>
      <div className="card-container">
        <div className="card">
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
        </div>
        <div className="card">
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
        </div>

        <div className="card">
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

<hr></hr>    

  {/* Iteration 6 */}
  <h1>6. Rating</h1>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>


<hr></hr>    

  {/* Iteration 7 */}
  <h1>7. DriverCard</h1>

<div>
  <DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }} />
<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }} />
</div>


    </div>
  );
}

export default App;
