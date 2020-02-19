import React, { Component } from 'react';
import IdCard from './components/idcard';
import Greetings from './components/Greetings';
import Random from './components/Random';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <div>
        <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" lastname="Doe" firstname="John" gender="male" height={178} birth="Tue 11 05 1988"/>
        <IdCard picture="https://randomuser.me/api/portraits/women/44.jpg" lastname="Delores" firstname="Obrien" gender="female" height={172} birth="Tue 11 05 1988"/>
        </div>
        
        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de" children="Ludwig"/>
        <Greetings lang="fr" children="François" />

        <h1>Random</h1>
        {/* TODO: Use the Greetings component */}
        <Random min="{1}" max="{6}"/>
        <Random min="{1}" max="{100}" />
      </div>
    );
  }
}

export default App;
