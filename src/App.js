import React from 'react';
import IdCard from './IdCard/IdCard';
import NavBar from './Navbar/Navbar';

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
        birth={new Date("1988-05-11")}
      />
    </>
  );
}

export default App;