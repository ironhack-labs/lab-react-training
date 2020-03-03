import React, { Component } from 'react';

//iteration #1
import IdCard from './components/IdCard';
import studentsData from './components/IdCard/studentData';

//iteration #2
import Greetings from './components/greetings';

//iteration #3
import Random from './components/random';

//iteration #4
import BoxColor from './components/boxColor';

//iteration #5
import CreditCard from './components/CreditCard';

//iteration #6
import Rating from './components/Rating';

//iteration #7
import DriverCard from './components/DriverCard';

//iteration #8
import LikeButton from './components/LikeButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {studentsData.map(idCard => (
          <IdCard
            key={idCard.id}
            lastName={idCard.lastName}
            firstName={idCard.firstName}
            picture={idCard.picture}
            gender={idCard.gender}
            height={idCard.height}
            birth={idCard.height}
          />
        ))}
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <div style={{ color: 'white' }}>
          <BoxColor r={255} g={0} b={0} />
        </div>
        <div style={{ color: 'black' }}>
          <BoxColor r={128} g={255} b={0} />
        </div>
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
          bgColor="#eeeeee"
          color="#222222"
        />
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
        <Rating>0</Rating>
        <br />
        <Rating>1.49</Rating>
        <br />
        <Rating>1.5</Rating>
        <br />
        <Rating>3</Rating>
        <br />
        <Rating>4</Rating>
        <br />
        <Rating>5</Rating>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE'
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER'
          }}
        />
        <LikeButton /> <LikeButton />
      </div>
    );
  }
}

export default App;
