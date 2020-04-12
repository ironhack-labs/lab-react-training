import React, { Component } from 'react';
import IdCard from './components/IdCard';
import moment from 'moment';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          firstName={"John"}
          lastName={"Doe"}
          gender={"male"}
          height={"1.78m"}
          birth={new Date("1992-07-14")}>       


        </IdCard>
        <IdCard
          picture="https://randomuser.me/api/portraits/women/44.jpg"          
          firstName={"Obrien"}
          lastName={"Delores"}
          gender={"female"}
          height={"1.72m"}
          birth={new Date("1988-05-11")}>       
          </IdCard>

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
    </div>
    );
  }
}

export default App;
