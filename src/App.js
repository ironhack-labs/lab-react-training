import React from 'react';
import './App.css';


import IdCard from './components/id-card/IdCard';

function App() {
  return (
    <div className="App">

      <div className="mx-4 my-4">
        <IdCard lastName="Doe" firstName="John" gender="Male" height={`${1.78}m`} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" />
        <IdCard lastName="Delores" firstName="Obrien" gender="Female" height={`${1.72}m`} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />
      </div>



    </div>
  );
}

export default App;
