import React from 'react';
import IdCard from './IdCard/IdCard.js';
import NavBar from './Navbar/Navbar.js';
import Greetings from './Greetings/Greetings.js'
import Random from './Random/Random.js';

function App() {
  return (
    <>
      <NavBar />
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        lastName='Doe'
        firstName='John'
        gender='male'
        height={172}
        birth={new Date("1988-05-11")} />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </>
  );
}

export default App;