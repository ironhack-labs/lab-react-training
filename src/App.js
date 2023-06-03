import logo from './logo.svg';
import './App.css';
import React from 'react';
import IdCard from './components/IdCard.jsx'

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'      
        gender='male'       
        height={178}       
        birth={new Date("1992-07-14")}       
        picture="https://randomuser.me/api/portraits/men/44.jpg"     
      />
      

      
    </div>
  );
}

export default App;
