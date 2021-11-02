import React from 'react';
import IdCard from './components/IdCard';
import Random from './components/Random'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1 className="title">IdCard:</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1 className="title">Random:</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </>
  );
}

export default App;
