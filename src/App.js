import React from 'react';
import IdCard from './components/IdCard';
import './App.css';

const App = () => {
  return (
    <div>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height="1.78m"
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height="1.72m"
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
};

export default App;
