import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './components/Idcard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';


function App() {
  const user = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: '1992-07-14',
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: '1988-05-11',
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  return (
    <div className="App">
      {user.map((eachUser) => (
        <IdCard
          lastName={eachUser.lastName}
          firstName={eachUser.firstName}
          gender={eachUser.gender}
          height={eachUser.height}
          birth={eachUser.birth}
          picture={eachUser.picture}
        />
      ))}

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h1 className="randomH1">Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h1 className="randomH1">BoxColor</h1>
      <BoxColor r={255} g={150} b={20} />
      <BoxColor r={128} g={200} b={0} />
      <h1 className="randomH1">Credit Cards</h1>
      <div className="cardContainer">
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
      </div>
    </div>
  );
}

export default App;
