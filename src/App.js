import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <IdCard  
          lastName='Robson'
          firstName='Santos'
          gender='male'
          height={181}
          birth={new Date("1981-09-04")}
          picture="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-0/p206x206/74575651_2597664863589997_2029651297543651328_o.jpg?_nc_cat=100&_nc_sid=da31f3&_nc_ohc=a23hl9QxqYoAX--pDZW&_nc_ht=scontent.fcgh37-1.fna&_nc_tp=6&oh=442a4df3ee8977b9cdcb6ce31b8f77c2&oe=5F3D5DE3"/>
          src/App.js and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
