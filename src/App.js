import React from 'react';
import './App.css';
import idCard from './components/idCard'

function App (props) {
  return (

    <div>

 <idCard

        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        imgURL="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <idCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        imgURL="https://randomuser.me/api/portraits/women/44.jpg"
      />

    </div>


  );
}

export default App;
