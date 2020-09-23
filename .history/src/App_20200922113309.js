import React from 'react';
import './App.css';
import IdCard from './components/IdCard.js';

function App() {
  return (
    <div className="App">
      <div className="IdCard">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
    </div>
  );
}

export default App;
