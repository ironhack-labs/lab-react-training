import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

class App extends Component {
  render() {
    return (
      <div>
        <h1> IdCard (Iteration 1)</h1>
          <IdCard lastName='Doe' firstName='John' gender='male' height={178}
            birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" />
          <IdCard lastName='Delores' firstName='Obrien' gender='female' height={172}
            birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />

        <h1> Greetings (Iteration 2)</h1>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>

        <h1> Random  (Iteration 3)</h1>
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>

        <h1> BoxColor (Iteration 4)</h1>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
      </div>
    );
  }
}

export default App;
