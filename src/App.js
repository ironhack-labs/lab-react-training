import React from 'react';
import './App.css';
import IdCard from './components/idcard/IdCard';
import Greetings from './components/greetings/Greetings'

function App() {
  return (
    <div className="App">
      <div>
        <h3>IdCard</h3>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <h3>Greetings</h3>
        <div>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </div>
      </div>
      <div>
        <h3>Random</h3>
      </div>
    </div>
  );
}

export default App;
