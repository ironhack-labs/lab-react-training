import React from 'react';
import Section from './components/sections/Section';
import IdCard from './components/id-cards/IdCard';
import Picture1 from './images/IdCard1.jpg';
import Picture2 from './images/IdCard2.jpg';
import Greetings from './components/greetings/Greeting';
import Random from './components/randoms/Random';
import BoxColor from './components/box-color/BoxColor';
import CreditCard from './components/credit-card/CreditCard';
import Rating from './components/ratings/Rating';
import './App.css';




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

        <Random min={1} max={6} />
        <Random min={1} max={100} />

      </Section>

      <Section title="BoxColor" >

        <BoxColor className="text-white" r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

      </Section>

      <Section title="CreditCard" >
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
      </Section>

      <Section title="Rating">

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

      </Section>


    </div>
  );
}

export default App;
