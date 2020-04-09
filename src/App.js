import React, { Component } from 'react';
import IdCard from './idcard';
import Greetings from './greetings';
import Random from './random';
import Box from './box';
class App extends Component {

  random() {

    let ale = Math.random(Math.round(0)) * 255



    return ale

  }

  render() {
    this.random()


    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard img="https://randomuser.me/api/portraits/men/44.jpg" name="John" last="Doe" genbder="Male" height="1.78" birth="Tue 14 1992 Jul" />
        <IdCard img="https://randomuser.me/api/portraits/women/44.jpg" name="Obrien" last="Dolores" genbder="Female" height="1.72" birth="Tue May 11 1993" />


        <h1>Greetings</h1>
        <Greetings lang="Hallo Ludwig" />
        <Greetings lang="Bonjour François" />


        <Random rnd="Random value between 1 and 6 => " />
        <Random rnd="Random value between 1 and 100 => " />

        <Box r={this.random()} g={this.random()} b={this.random()} />
        <Box r={this.random()} g={this.random()} b={this.random()} />
        <Box r={this.random()} g={this.random()} b={this.random()} />
        <Box r={this.random()} g={this.random()} b={this.random()} />


      </div>


    );
  }
}



export default App;
