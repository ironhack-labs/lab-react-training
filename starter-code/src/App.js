import React, {Component} from 'react';
import IdCards from './components/IdCards';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

class App extends Component {
  state = {};
  render () {
    return (
      <main className="container">
        <h1 className="mt-3">IdCard</h1>
        <IdCards />

        <h1 className="mt-3">Greetings</h1>
        <Greetings />

        <h1 className="mt-3">Random Number</h1>
        <Random />

        <h1 className="mt-3">BoxColor</h1>
        <BoxColor />

        <h1 className="mt-3">CreditCard</h1>
        <CreditCard />

      </main>
    );
  }
}

export default App;
