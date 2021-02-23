import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard'; 
import Greetings from './components/Greetings'; 
import Random from './components/Random'; 
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

function App() {

const user1= {
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:178,
  birth: new Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
}
const user2={
  lastName:'Delores ',
  firstName:'Obrien',
  gender:'female',
  height: 172,
  birth: new Date("1988-05-11"),
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
}
        return (
      <div className="App">
        <IdCard data={user1}/>
        <IdCard data={user2}/>
        <h1>Greetings</h1>
        <Greetings lang="de">Uwe</Greetings>
        <Greetings lang="fr">Oriane</Greetings>
        <Greetings lang="es">Maria</Greetings>
        <Greetings lang="en">Nathan</Greetings>
        <h1>Random</h1>
        <Random/>
        <BoxColor/>
        <h1>Credit Card</h1>
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
        <h1></h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
        <h1>Drive Card</h1>
        <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
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
    ); 
}

export default App;

// export default App;
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
