import React, { Component } from "react";
import IdCard from "./components/IdCard/IdCard";
import Greetings from './components/greetings/Greetings';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* TODO: Use the IdCard component */}
        <IdCard
          firstName="John"
          lastName="Doe"
          gender="male"
          height={178}
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          firstName="Obrien"
          lastName="Delores "
          gender="female"
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        {/* TODO: Use the Greetings component */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
    );
  }
}

export default App;
