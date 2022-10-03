import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import React from 'react';
import BoxColor from './components/BoxColor';

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
      <Greetings lang="fr">
        <b>Bonjour François</b>
      </Greetings>
      <Greetings lang="de">
        <b>Hallo Ludwig</b>
      </Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={10} />
    </div>
  );
}

export default App;
