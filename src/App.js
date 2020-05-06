import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetins';
import Random from './components/Random';

const idCards = [
  {
    lastName: "Doe",
    firstName: "John",
    gender: "male",
    height: 1.78,
    birth: `${new Date("1992-07-14")}`,
    picture: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    lastName: "Delores",
    firstName: "Obrien",
    gender: "female",
    height: 1.72,
    birth: `${new Date("1988-05-11")}`,
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];
class App extends Component {
  state={
    data: idCards
  }
  render() {
    return (
      <div className="App">
      <div className="cards">
        {idCards.map((idProps) => (
          <IdCard {...idProps} />
        ))}
      </div>
       
        {<Greetings lang="de">Ludwig</Greetings>}
        {<Greetings lang="fr">Francois</Greetings>}

        {<Random min={1} max={6}/>}
        { <Random min={1} max={100}/>}

      </div>


    );
  }
}

export default App;
