import React, { Component } from 'react';
import IdCard from './IdCard'
import "./index.css"

class App extends Component {
  // const a = 10
  render() {
    // const b = 20
    return (
      <div className="App">
        <h1>IdCard</h1>
        <div className="first-person">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        </div>
        <div className="second-person">
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        </div>
        

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
