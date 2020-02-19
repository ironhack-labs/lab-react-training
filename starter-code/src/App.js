import React, { Component } from 'react';
import IdCard from './components/idcard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <div>
        <IdCard picture="https://randomuser.me/api/portraits/men/44.jpg" lastname="Doe" firstname="John" gender="male" height={178} birth="1988-05-11"/>
        <IdCard picture="https://randomuser.me/api/portraits/women/44.jpg" lastname="Delores" firstname="Obrien" gender="female" height={172} birth="1988-05-11"/>
        </div>
        {/* TODO: Use the IdCard component */}

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
