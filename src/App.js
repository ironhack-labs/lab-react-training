import React from 'react';
import IdCard from './components/IdCard'
import Greetings from './components/Gretings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CardWrapper from './components/CardWrapper';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import './App.css';

function App() {
  return (
    <div className="App container">
      <h1 className="m-5">React training💪</h1>
      <h2 className="m-5">Iteration 1️⃣</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h2 className="m-5">Iteration 2️⃣</h2>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">Mike</Greetings>
      <Greetings lang="es">Manolo</Greetings>
      <Greetings lang="ve">Pedro</Greetings>

      <h2 className="m-5">Iteration 3️⃣</h2>

      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <Random min={0} max={2} />

      <h2 className="m-5">Iteration 4️⃣</h2>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <BoxColor r={120} g={15} b={100} />

      <h2 className="m-5">Iteration 5️⃣</h2>
      <CardWrapper />

      <h2 className="m-5">Iteration 6️⃣</h2>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <Rating>6</Rating>
      <Rating>7</Rating>

      <h2 className="m-5">Iteration 7️⃣</h2>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
    </div>
  );
}

export default App;
