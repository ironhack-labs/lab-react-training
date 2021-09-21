import React from 'react';
import './App.css';
import IdCard from './components/IdCard'

function App (props) {
  return (

    <div className='container'>

 <IdCard

        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        imgURL="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        imgURL="https://randomuser.me/api/portraits/women/44.jpg"
      />

    </div>


  );
}

export default App;
