import React from 'react';
import logo from './logo.svg';
import IdCard from './idCard/idCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178 / 100}
            birth={new Date('1992-07-14').toDateString()}
            picture={
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="photo"
              />
            }
          />
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172 / 100}
            birth={new Date('1988-05-11').toDateString()}
            picture={
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="photo"
              />
            }
          />
        </p>
      </header>
    </div>
  );
}

export default App;
