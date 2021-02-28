import { Fragment } from 'react';

import Section from './components/section/Section';
import IdCard from './components/idcard/IdCard';

import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container pt-5">
          <Section title="IdCard">
          <div className="idCard mb-3">
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