import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard'
import  Greetings from './Greetings'
import  Random from './Random'
import  BoxColor from './BoxColor'



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
        /><br />
        <IdCard
            lastName='Ulbrich'
            firstName='Max'
            gender='male'
            height={183}
            birth={new Date("1992-08-12")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <hr/>

        <Greetings lang="hr">Max</Greetings>
        <Greetings lang="de">Marc</Greetings>

        <hr/>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <hr/>

        <BoxColor r={255} g={0} b={0} /><br />
        <BoxColor r={128} g={255} b={0} />

        <hr/>

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
