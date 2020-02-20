import React, { Component } from 'react';
import IdCard from './components/idcard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import Box from './components/Box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
          <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" lastname="Doe" firstname="John" gender="male" height={1.78} birth="Mon Jul 13 1992"/>
          <IdCard picture="https://randomuser.me/api/portraits/women/44.jpg" lastname="Delores" firstname="Obrien" gender="female" height={1.72} birth="Mon May 10 1993"/>
      
        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de" children="Ludwig"/>
        <Greetings lang="fr" children="François" />

        <h1>Random</h1>
        {/* TODO: Use the Greetings component */}
        <Random min="{1}" max="{6}"/>
        <Random min="{1}" max="{100}" />

        <h1>Box</h1>
        {/* TODO: Use the Greetings component */}
        <Box r={255} g={0} b={0} color="black"/>
        <Box r={128} g={255} b={0} color="white"/>
      </div>
    );
  }
}

export default App;
