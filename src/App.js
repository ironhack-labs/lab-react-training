import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard'

const App = () => {
  return (
    <div className="App">
        <IdCard
        lastName='Grewning'
        firstName='Marc'
        gender='male'
        height={178}
        birth={new Date("1995-11-02")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
    />



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
