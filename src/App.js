import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings'; 
import Random from './Random'; 
import BoxColor from './BoxColor'; 
import CreditCard from './CreditCard';
import Rating from './Rating';
import DriverCard from './DriverCard';
import LikeButton from './LikeButton';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>IdCard</h1>
        <div className="card">
          <IdCard
            firstName="Pedro"
            lastName="Miguel"
            gender="male"
            height={178}
            birth={new Date('1992-07-14')}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />
        </div>
        <div className="card">
          <IdCard
            firstName="Maria"
            lastName="Antonia"
            gender="female"
            height={172}
            birth={new Date('1988-05-11')}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
      </header>
      <div>
        <h1>Greetings</h1>
        <div className="greet">
          <Greetings lang="en">Pedro</Greetings>
        </div>
        <div className="greet">
          <Greetings lang="fr">Maria</Greetings>
        </div>
      </div>
      <div>
        <h1>Random</h1>
        <div className="random">
          <Random min={1} max={7} />
        </div>
        <div className="random">
          <Random min={1} max={100} />
        </div>
      </div>

      <h1>Box Color</h1>
      <div className="boxcolor">
        <BoxColor r={255} g={0} b={0} />
      </div>
      <div className="boxcolor">
        <BoxColor r={128} g={255} b={0} />
      </div>
      <h1>CreditCard</h1>
      <div
        className="credit"
        style={{ display: 'flex', justifyContent: 'center', margin: '35px' }}
      >
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="lightgrey"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="gold"
          color="white"
        />
      </div>
      <div className="rating" style={{ textAlign: 'left' }}>
        <h1>Rating</h1>
        <p>
          <Rating>0</Rating>
        </p>
        <p>
          <Rating>1.49</Rating>
        </p>
        <p>
          <Rating>1.5</Rating>
        </p>
        <p>
          <Rating>3</Rating>
        </p>
        <p>
          <Rating>4</Rating>
        </p>
        <p>
          <Rating>5</Rating>
        </p>
      </div>
      <div>
        <h1>DriverCard</h1>
        <div className="drive">
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE',
            }}
          />
        </div>
        <div className="drive">
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
      </div>
      <div>
        <LikeButton /> <LikeButton />
      </div>
    </div>
  );
  
};

export default App;



