import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Alossi"
        firstName="Rich"
        gender="male"
        height="175"
        birth="1985-01-28"
        picture="https://www.myrtlebeachonline.com/latest-news/w5f2l3/picture244574487/alternates/FREE_768/zombie%20greg"
      />
      <IdCard
        lastName="Holloway"
        firstName="Jake"
        gender="male"
        height="180"
        birth="1983-06-06"
        picture="https://cdn.mos.cms.futurecdn.net/4xnGvCxSExkxBeBgYbRQfj-1024-80.jpg.webp"
      />
      <Greetings lang="it">Nora</Greetings>
      <Greetings lang="de">Arielle</Greetings>
    </div>
  );
}

export default App;
