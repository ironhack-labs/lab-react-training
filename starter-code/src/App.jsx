import React, { Component } from 'react';

//iteration #1
import IdCard from './components/IdCard';
import studentsData from './components/IdCard/studentData';

//iteration #2
import Greetings from './components/greetings';

//iteration #3
import Random from './components/random';

//iteration #4
import BoxColor from './components/boxColor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {studentsData.map(idCard => (
          <IdCard
            key={idCard.id}
            lastName={idCard.lastName}
            firstName={idCard.firstName}
            picture={idCard.picture}
            gender={idCard.gender}
            height={idCard.height}
            birth={idCard.height}
          />
        ))}

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <div style={{ color: 'white' }}>
          <BoxColor r={255} g={0} b={0} />
        </div>
        <div style={{ color: 'black' }}>
          <BoxColor r={128} g={255} b={0} />
        </div>
      </div>
    );
  }
}

export default App;
