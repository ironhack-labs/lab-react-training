import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './idcard/IdCard.js';
const data = require("./data/berlin.json");
console.log(data)

function App() {
  return (
    <div className='idcard-container'>

    {data.map((idcard) => (
        <IdCard 
        firstname={idcard.firstName}
        lastname={idcard.lastName}
        country={idcard.country}
        // isStudent={false}
        img={idcard.img}

        />
    ))}

    </div>
  
    );


}

export default App;
