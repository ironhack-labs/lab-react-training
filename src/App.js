import React from 'react';
import Iteration1 from './components/Iteration1.jsx';
import Greetings from './components/Greetings/Greetings.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>IdCard</h1>
        <Iteration1
          img="https://randomuser.me/api/portraits/men/44.jpg"
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
        />
        <Iteration1
          img="https://randomuser.me/api/portraits/women/44.jpg"
          lastName="Delores"
          firstName="Obrien"
          gender="femala"
          height={172}
          birth={new Date('1988-05-11')}
        />
      </div>
      <div>
        <h1>Greetings</h1>
        <Greetings lang="es" name="Dima" />
        <Greetings lang="de" name="Iana" />
      </div>
    </div>
  );
}

export default App;
