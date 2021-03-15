import React from 'react';
import logo from './logo.svg';
import IdCard from '../src/Components/IdCard';
import Greetings from '../src/Components/Greetings';
import Random from '../src/Components/Random';
import BoxColor from '../src/Components/BoxColor';



import './App.css';

function App() {
  return (
    /*IT1*/
    <div className="idCard">
      <div>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      <div>
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      /*IT2*/
      <div className="greetings">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="en">François</Greetings>
      </div>
      /*IT3*/
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      /*IT4*/
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
