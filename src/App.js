import React from 'react';
import './App.css';
import IdCard from './Components/IdCards.jsx';
import Greetings from './Components/Greetings.jsx';
import Random from './Components/Random.jsx';


function App() {
  return (
    <React.Fragment>
    <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

<Random min={1} max={6}/>
<Random min={1} max={100}/>

    </React.Fragment>
  );
}

export default App;
