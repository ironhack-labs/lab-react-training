import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'


function App() {
  return (
    <div className="App">

      <IdCard lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/84.jpg"/>
        />
      <IdCard
          lastName='1 '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/54.jpg"
        />
      <IdCard lastName='2'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/47.jpg"/>
        />
      <IdCard
          lastName='3 '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/24.jpg"
        />
      <IdCard lastName='4'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/4.jpg"
        />
      <IdCard
          lastName='5 '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/43.jpg"
        />
        <IdCard
            lastName='6 '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/34.jpg"
          />
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6} />
        <Random min={1} max={100} />

          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />




    </div>
    // finApp



  );
}

export default App;
