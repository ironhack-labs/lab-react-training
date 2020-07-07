import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import RandomNumber from './components/RandomNumber';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={String(new Date('1992-07-14'))}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={String(new Date('1988-05-11'))}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <Greetings lang="en" />
        <Greetings lang="de" />
        <RandomNumber min="1" max="6" />
        <RandomNumber min="1" max="5000" />
        <BoxColor r="255" g="0" b="0" />
        <BoxColor r="122" g="100" b="0" />
        <BoxColor r="128" g="255" b="0" />
        <BoxColor r="0" g="0" b="255" />
    </div>
  );
}

export default App;
