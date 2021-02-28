import { Fragment } from 'react';

import Section from './components/section/Section';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings';

import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container pt-5">
        <Section title="IdCard">
          <div className="idcard mb-3">
            <IdCard 
              firstName= 'Silvia'
              lastName= 'Guerola'
              gender= 'Female'
              height= {156}
              birth= {new Date("1976-06-10")}
              picture= 'img/persons/silvia.jpg'
            />

            <IdCard 
              firstName= 'Leia'
              lastName= 'Organa'
              gender= 'Female'
              height= {155}
              birth= {new Date("1956-10-21")}
              picture= 'img/persons/leia.jpg'
            />
            </div>
        </Section>

    <hr className="my-5"/>

        <Section title="Greeting">
          <div className="greeting mb-3">
            <Greetings greetings= 'es'>Hola Silvia</Greetings>
            <Greetings greetings= 'sv'>Hallå Silvia</Greetings>
            <Greetings greetings= 'fr'>Salut Silvia</Greetings>
          </div>
        </Section>

    <hr className="my-5"/>

        <Section title="Random">

        </Section>

    <hr className="my-5"/>

        <Section title="BoxColor">

        </Section>

    <hr className="my-5"/>

        <Section title="CreditCard">

        </Section>

    <hr className="my-5"/>

        <Section title="Rating">

        </Section>

    <hr className="my-5"/>

        <Section title="DriverCard">

        </Section>
      </div>
    </Fragment>

  );
}

export default App;