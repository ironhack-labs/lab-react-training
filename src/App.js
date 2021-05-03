import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard'


function App() {
  const Peter = {
    lastName : 'Smith', 
    firstName : 'Peter',
    gender : 'male',
    height : 171,
    birth : new Date("1987-01-01"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"  
  }
  return (
    <div className="App">
      <header className="App-header">
         <h1>ID CARD</h1>
        <IdCard lastName={Peter.lastName} firstName={Peter.firstName} gender={Peter.gender} height={Peter.height} birth={Peter.birth} picture={Peter.picture}/>
      </header>
    </div>
  );
}

export default App;
