import { Fragment } from 'react';

import Section from './components/section/Section';
import IdCard from './components/idcard/IdCard';

import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container pt-5">
        <Section title="IdCard">
          <div className="card">
            <div className="card-body">
              <IdCard lastName="Guerola"></IdCard>
              <IdCard firstName="Silvia"></IdCard>
              <IdCard gender="Female"></IdCard>
              <IdCard height="156"></IdCard>
              <IdCard birth={Date}></IdCard>
              <IdCard picture="./../public/img/persons/maxence-glasses.png"></IdCard>
            </div>
          </div>
        </Section>

        <Section title="Greetings">

        </Section>

        <Section title="Random">

        </Section>

        <Section title="BoxColor">

        </Section>

        <Section title="CreditCard">

        </Section>

        <Section title="Rating">

        </Section>

        <Section title="DriverCard">

        </Section>
      </div>
    </Fragment>

  );
}

export default App;