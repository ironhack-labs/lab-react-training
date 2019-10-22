import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import ClickablePicture from './components/ClickablePicture';
import LikeButton from './components/LikeButton';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> 1. Id Card</h1>
        <IdCard />
        <h1>2. Greetings</h1>
        <Greetings lang="de"> Ludwig</Greetings>
        <Greetings lang="fr"> François</Greetings>
        <h1>3. Random Number</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <h1>4. Box Color</h1>

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />


        <h1>8. Like Button</h1>
        <LikeButton />
        <h1>9. Clickable Picture</h1>
        <ClickablePicture />
      </div>
    );
  }
}

export default App;
