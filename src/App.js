// import logo from './logo.svg';
import React from 'react';
import './App.css';
import IdCard from './components/idCards/IdCards';
import Greeting from './components/greeting/Greeting';
import Random from './components/random/Random';
import BoxColor from './components/boxColor/BoxColor';

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

    <div>
    test
       <div>
        <h1> Iteration 1 </h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/ retratos/hombres/44.jpg"
        />
        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/ retratos/mujeres/44.jpg"
        />
      </div>
    
      <div>
        <h1> Iteration2</h1>
        <Greeting lang="de">Ludwig</Greeting>
        <Greeting lang="en">François</Greeting>
        <Greeting lang="es">Ludwig</Greeting>
        <Greeting lang="fr">François</Greeting>
      </div>

      <div>
        <h1> Iteration3</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>

      <div>
        <h1> Iteration4 </h1>
        <BoxColor r={255} g={0} b={0}/>
        <BoxColor r={128} g={255} b={0}/>
      </div> 

    </div>
  );
}

export default App;