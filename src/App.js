import React from 'react';
import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'

function App() {
  const divStyle = {
    border: "1px solid black", 
    display: "flex", 
    padding: "5px",
  }
  
  return (
    <div style={{margin: "10px"}}>
  <br/>
  <h1>IdCard</h1>
   <div>
    <div style={divStyle}>
    <IdCard 
    lastName='Doe'
    firstName='John'
    gender='male'
    height={178}
    birth={new Date("1992-07-14")}
    picture="https://randomuser.me/api/portraits/men/44.jpg"
    />
  </div>
    <br/>
  <div style={divStyle}>
    <IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
</div>
</div>
<br/>
<h1>Greetings</h1>
<div style={divStyle} >
<Greetings lang="de">Ludwig</Greetings>
</div>

<br/>
<div style={divStyle} >
<Greetings lang="fr">François</Greetings>
</div>
    </div>
  );
}

export default App;
