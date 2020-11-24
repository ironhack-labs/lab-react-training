import React from 'react';
// import logo from './logo.svg';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

import './App.css';

function App() {
  return (
    <div className="App">
 
 {/* -----iteration 1----- */}
 <h1>IdCard</h1>
      <IdCard
          lastName='Cocker'
          firstName='Joe'
          gender='male'
          height={170}
          birth={new Date("1944-05-20")}
          picture="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-134967-joe-cocker.jpg?w=306"
      />
       <IdCard
          lastName='Carey'
          firstName='Mariah'
          gender='female'
          height={165}
          birth={new Date("1970-03-27")}
          picture="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-134949-mariah-carey.jpg?w=306"
      />

 {/* -----iteration 2----- */}

<h1>Greetings</h1>
       <Greetings lang="de">Ludwig</Greetings>
       <Greetings lang="en">Mike</Greetings> 
       <Greetings lang="es">Ricardo</Greetings>
       <Greetings lang="fr">François</Greetings> 

    </div>
  );
}

export default App;
