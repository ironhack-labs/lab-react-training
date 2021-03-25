import React from 'react';
import IdCard from './components/IdCard'
import Greetings from './components/Gretings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import './App.css';

function App() {
  return (
    <div className="App container">
      <h1 className="m-5">React training💪</h1>
      <h2 className="m-5">Iteration 1️⃣</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={ 178 }
        birth={ new Date('1992-07-14') }
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={ 172 }
        birth={ new Date('1988-05-11') }
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h2 className="m-5">Iteration 2️⃣</h2>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">Mike</Greetings>
      <Greetings lang="es">Manolo</Greetings>
      <Greetings lang="ve">Pedro</Greetings>

      <h2 className="m-5">Iteration 3️⃣</h2>

      <Random min={ 1 } max={ 6 } />
      <Random min={ 1 } max={ 100 } />
      <Random min={ 0 } max={ 2 } />

      <h2 className="m-5">Iteration 4️⃣</h2>

      <BoxColor r={ 255 } g={ 0 } b={ 0 } />
      <BoxColor r={ 128 } g={ 255 } b={ 0 } />
      <BoxColor r={ 120 } g={ 15 } b={ 100 } />
    </div>
  );
}

export default App;
