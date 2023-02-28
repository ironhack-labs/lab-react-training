import './App.css';
import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Pereira"
        firstName="Francisco"
        gender="male"
        height={188}
        birth={new Date('1980-07-14')}
        picture="https://media.licdn.com/dms/image/C5103AQFoQzjnwdaESg/profile-displayphoto-shrink_800_800/0/1517592532255?e=1683158400&v=beta&t=j2wvGI-12GgxhneZq85oBlvKbRaFFStTOEWiJEakj2g"
      />

      <IdCard
        lastName="Kuhn"
        firstName="Caroline"
        gender="female"
        height={167}
        birth={new Date('1997-05-11')}
        picture="https://media.licdn.com/dms/image/C4D03AQHbs3UHGwutnA/profile-displayphoto-shrink_800_800/0/1620503550629?e=1683158400&v=beta&t=5ey5tAEwxql7pbxhSaC4zFqlYmGGFSoVPeUq1fYeyec"
      />
      <hr />

      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <hr />

      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <hr />

      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <hr />

      <div>
      <div>
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
        </div>

        <div>
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        </div>

        <div>
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
        </div>
      </div>
      <hr />

      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <hr />

      <div>
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
    </div>
  );
}

export default App;
