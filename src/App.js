import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import ClickablePicture from './components/ClickablePicture';


function App (props) {
  return (

    <><div className='container'>

      <IdCard

        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        imgURL="https://randomuser.me/api/portraits/men/44.jpg" />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        imgURL="https://randomuser.me/api/portraits/women/44.jpg" />

    </div><div>

        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png" />

      </div></>



  );
}

export default App;
