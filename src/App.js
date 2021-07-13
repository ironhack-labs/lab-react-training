import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random'
import BoxColor from './BoxColor';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    // </div>
    <>
      <div>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={1.78}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={1.72}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="es">Pilar</Greetings>
      </div>
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <BoxColor className="RedBox" r={255} g={0} b={0} />
        <BoxColor className="GreenBox" r={128} g={255} b={0} />
      </div>
    </>
  );
}

export default App;
