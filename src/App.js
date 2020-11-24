import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard'


function App() {
  return (
    <div className="App">

      <IdCard lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"/>
    </div>
  );
}

export default App;
