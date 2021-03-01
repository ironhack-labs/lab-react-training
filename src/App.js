import React from 'react';
import Section from './components/sections/Section';
import './App.css';
import IdCard from './components/id-cards/IdCard';
import Picture1 from './images/IdCard1.jpg';
import Picture2 from './images/IdCard2.jpg';
import Greetings from './components/greetings/Greeting';
import Random from './components/randoms/Random';
import BoxColor from './components/box-color/BoxColor';



function App() {
  return (
    <div className="App">

      <Section title="IdCard" >

        <IdCard
          firstName="John"
          lastName="Doe"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture={Picture1}
        />

        <IdCard
          firstName="Obrien"
          lastName="Delores"
          gender="female"
          height={172}
          birth={new Date("1988-05-11")}
          picture={Picture2}
        />

      </Section>

      <Section title="Greetings">

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

      </Section>

      <Section title="Random">

      <Random min={1} max={6}/>
      <Random min={1} max={100}/> 

      </Section>

      <Section title="BoxColor">

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      </Section>

      <Section title="CreditCard">

      </Section>

      <Section title="Rating">

      </Section>


    </div>
  );
}

export default App;
