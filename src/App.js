// import logo from './logo.svg';
import React from 'react';
import './App.css';
import IdCard from './components/idCards/IdCards';
import Greeting from './components/greeting/Greeting';
import Random from './components/random/Random';
import BoxColor from './components/boxColor/BoxColor';
import CreditCard from './components/creditCard/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/driverCard/DriverCard';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      test
      <div>
        <h1> Iteration 1 </h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/ retratos/hombres/44.jpg"
        />
        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/ retratos/mujeres/44.jpg"
        />
      </div>
      <div>
        <h1> Iteration2</h1>
        <Greeting lang="de">Ludwig</Greeting>
        <Greeting lang="en">François</Greeting>
        <Greeting lang="es">Ludwig</Greeting>
        <Greeting lang="fr">François</Greeting>
      </div>
      <div>
        <h1> Iteration3</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h1> Iteration4 </h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <h1>Iteration5</h1>
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
      <div>
        <h1>Iteration6</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <h1>Iteration7</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />
        <DriverCard 
          name = "Dara Khosrowshahi" 
          rating = { 4.9 } 
          img = "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg" 
          car = { { 
            model : "Audi A3" ,
            licencePlate: " BE33ER " 
          }} 
        />
      </div>
      <div>
        <h1>Iteration8</h1>
      </div>
      <div>
        <h1>Iteration9</h1>
      </div>
      <div>
        <h1>Iteration10</h1>
      </div>
      <div>
        <h1>Iteration11</h1>
      </div>
      <div>
        <h1>Iteration12</h1>
      </div>
      <div>
        <h1>Iteration13</h1>
      </div>
      <div>
        <h1>Iteration14</h1>
      </div>
    </div>
  );
}

export default App;
