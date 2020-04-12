import React, { Component } from 'react';
import IdCard from './components/IdCard';
//import "./data/IdCard.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          // src={"./personas/maxence.png"}
          firstName={"John"}
          lastName={"Doe"}
          gender={"male"}
          height={"1.78m"}
          birth={"12"}>

        </IdCard>
        <IdCard
          // src={"./personas/maxence.png"}
          firstName={"Obrien"}
          lastName={"Delores"}
          gender={"female"}
          height={"1.72m"}
          birth={"12"}>
        </IdCard>

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
    </div>
    );
  }
}

export default App;
