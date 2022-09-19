import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import React from 'react';

const idArray = [
  {
    user: {
      firstname: 'John',
      lastname: 'Doe',
      gender: 'male',
      height: '178',
      birth: '1992-07-14',
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
  },
  {
    user: {
      firstname: 'Obrien',
      lastname: 'Delores',
      gender: 'female',
      height: '172',
      birth: '1993-05-11',
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
];
function App() {
  return (
    <div>
      <IdCard
        firstname="John"
        lastname="Doe"
        gender="male"
        height="178"
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      ></IdCard>
      <IdCard
        firstname="Obrien"
        lastname="Delores"
        gender="female"
        height="172"
        birth="1993-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      ></IdCard>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="de">Ludwig</Greetings>
    </div>
  );
}

export default App;
