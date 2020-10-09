import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';

function App() {
  return (
    <div>
      <IdCard
        lastName="Newell"
        firstName="Aaron"
        gender="male"
        height={'180'}
        birth={new Date('1988-05-12')}
        picture="https://randomuser.me/api/portraits/men/41.jpg"
      />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={'170'}
        birth={new Date('1992-03-24')}
        picture="https://randomuser.me/api/portraits/women/40.jpg"
      />
    </div>
  );
}

export default App;
