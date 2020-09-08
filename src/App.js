import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         <IdCard  
          lastName='Anthopoulos'
          firstName='Alexandros'
          gender='male'
          height={185}
          birth={new Date("1987-01-25")}
          picture="https://randomuser.me/api/portraits/men/44.jpg" />

        </p>
      </header>
    </div>
  );
}

export default App;
