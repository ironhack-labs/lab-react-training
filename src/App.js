import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './Component/IdCard';
import Greetings from './Component/Greetings';
import Random from './Component/Random'

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Baby"
        firstName="Joe"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/70.jpg"
      />
      <div>
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/59.jpg"
        />
      </div>
      <h2>Wassup</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="">Zorg</Greetings>
      <div>
        <h3>wassup</h3>
       <Random min={1} max={6}/>
<Random min={1} max={100}/> 
      </div>
    </div>
  );
}

export default App;
