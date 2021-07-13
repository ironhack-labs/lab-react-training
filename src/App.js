import React from 'react';
import './App.css';
import IdCard from './components/IdCard';

function App() {
 
  return (
<div>
      <h1>IdCard</h1>
    
      <IdCard 
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        firstName="John"
        lastName="Doe"
        gender="male"
        height={1.78}
        birth={`${new Date("1992-07-14")}`}
      />
      <IdCard 
        picture="https://randomuser.me/api/portraits/women/8.jpg"
        firstName="Obrien"
        lastName="Delores"
        gender="female"
        height={1.72}
        birth={`${new Date("1988-05-11")}`} 
      />
</div>
  );
    
}

export default App;
