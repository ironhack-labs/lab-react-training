import { Fragment } from 'react';

import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/boxcolor/BoxColor';
import CreditCard from './components/creditcard/CreditCard';
import Rating from './components/rating/Rating';
import DriveCard from './components/drivercard/DriveCard';

import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
        <div className="container pt-5">
          <Section title="1 - Id Card">
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

          <Section title="2 - Greeting">
            <div className="greeting mb-3">
              <Greetings greetings= 'es'>Hola Silvia</Greetings>
              <Greetings greetings= 'sv'>Hallå Silvia</Greetings>
              <Greetings greetings= 'fr'>Salut Silvia</Greetings>
            </div>
          </Section>

      <hr className="my-5"/>

          <Section title="3 - Random">
            <Random min={1} max={6}/>
            <Random min={1} max={100}/>
          </Section>

      <hr className="my-5"/>

          <Section title="4 - Box Color">
            <BoxColor min={0} max={255} min={0} max={255} min={0} max={255} />
            <BoxColor min={0} max={255} min={0} max={255} min={0} max={255} />
          </Section>

      <hr className="my-5"/>

          <Section title="5 - Credit Card">
                <div className="card-group">
                  <CreditCard
                    picture= 'img/visa.png'
                    number= '2455 1154 1241'
                    expirationDate= ''
                    bank= 'CaixaBank'
                    owner= 'Silvia Guerola'
                    type= 'Visa'
                  />
                  <CreditCard
                    picture= 'img/master-card.svg'
                    number= '2455 1154 1241'
                    expirationDate= ''
                    bank= 'CaixaBank'
                    owner= 'Silvia Guerola'
                    type= 'Mastercard'
                  />
                  <CreditCard
                    picture= 'img/visa.png'
                    number= '2455 1154 1241'
                    expirationDate= ''
                    bank= 'CaixaBank'
                    owner= 'Silvia Guerola'
                    type= 'Visa'
                  />
            </div>
          </Section>

      <hr className="my-5"/>

          <Section title="6 - Rating">
            <Rating>0</Rating>
              <Rating>1.49</Rating>
              <Rating>1.5</Rating>
              <Rating>3</Rating>
              <Rating>4</Rating>
              <Rating>5</Rating>
          </Section>

      <hr className="my-5"/>

          <Section title="7 - Driver Card">
            <div className="driverCard mb-3">
                <DriveCard 
                  name= 'Silvia Guerola'
                  rating= '4.9'
                  car= 'Skoda Fabia'
                  model= 'Combi'
                  licensePlate= 'CO42DE'
                  picture= 'img/persons/silvia.jpg'
                />
                <DriveCard 
                  name= 'Leia Organa'
                  rating= '5'
                  car= 'Tantive IV'
                  model= 'Corvette CR90'
                  licensePlate= 'C3PO'
                  picture= 'img/persons/leia.jpg'
                />
              </div>
          </Section>

      <hr className="my-5"/>

          <Section title="8 - LikeButton">

          </Section>

      <hr className="my-5"/>

          <Section title="9 - ClickablePicture">
            
          </Section>

      <hr className="my-5"/>

          <Section title="10 - Dice">
            
          </Section>

      <hr className="my-5"/>

          <Section title="11 - Carousel">
            
          </Section>

      <hr className="my-5"/>

          <Section title="12 - NumbersTable">
            
          </Section>

      <hr className="my-5"/>

          <Section title="13 - FaceBook (Simple)">
            
          </Section>
          

      <hr className="my-5"/>

          <Section title="14 - FaceBook (Advanced)">
            
          </Section>
         </div>
    </Fragment>

  );
}

export default App;