import React from 'react';
// import logo from './logo.svg';
import IdCard from './idcard/IdCard.js';
import './App.css';
import Greetings from './greetings/Greetings.js';
import Random from './random/Random.js';
import BoxColor from './boxcolor/BoxColor.js';
import CreditCard from './creditcard/CreditCard.js';
import Rating from './rating/Rating.js'
import DriverCard from './drivercard/DriverCard.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <div>
            <div className="component">
              <IdCard
                lastName="Doe"
                firstName="John"
                gender="male"
                height={178}
                birth={new Date('1992-07-14')}
                picture="https://randomuser.me/api/portraits/men/44.jpg"
              />
            </div>
            <div className="component">
              <IdCard
                lastName="Delores"
                firstName="Obrien"
                gender="female"
                height={172}
                birth={new Date('1988-05-11')}
                picture="https://randomuser.me/api/portraits/women/44.jpg"
              />
            </div>
          </div>
          <div>
            <p className="component">
              <Greetings lang="de"> Ludwig</Greetings>
            </p>
            <p className="component">
              <Greetings lang="fr"> François</Greetings>
            </p>
            <p className="component">
              <Greetings lang="es"> Cheryl</Greetings>
            </p>
            <p className="component">
              <Greetings lang="en"> Cheryl</Greetings>
            </p>
          </div>
          <div>
            <p className="component">
              <Random min={1} max={6} />
            </p>
            <p className="component">
              <Random min={1} max={100} />
            </p>
          </div>
          <div>
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
          </div>
          <div>
            <CreditCard
              type="https://github.com/annavelarde/lab-react-training/blob/03d3487f1e458a93955e08834bb7ba15fa90c8f4/public/img/visa.png"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white"
            />
            <CreditCard
              type="https://github.com/annavelarde/lab-react-training/blob/03d3487f1e458a93955e08834bb7ba15fa90c8f4/public/img/master-card.svg"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222"
            />
            <CreditCard
              type="https://github.com/annavelarde/lab-react-training/blob/03d3487f1e458a93955e08834bb7ba15fa90c8f4/public/img/visa.png"
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
            <p><Rating>0</Rating></p>
            <p><Rating>1.49</Rating></p>
            <p><Rating>1.5</Rating></p>
            <p><Rating>3</Rating></p>
            <p><Rating>4</Rating></p>
            <p><Rating>5</Rating></p>
          </div>
          <div>
            <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{model: "Toyota Corolla Altis",licensePlate: "CO42DE"}} />
            <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{model: "Audi A3", licensePlate: "BE33ER"}} />
          </div>
        </>
      </header>
    </div>
  );
}

export default App;
