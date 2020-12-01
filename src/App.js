import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import data from './data/berlin.json';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';

class App extends Component {
  state = { data };
  render() {
    let dataArr = this.state.data;
    console.log(this.state);
    return (
      <div className="App">
        {dataArr.map((elem) => {
          return <Card person={elem} />;
        })}

        <BoxColor
          r={Math.floor(Math.random() * 255)}
          g={Math.floor(Math.random() * 255)}
          b={Math.floor(Math.random() * 255)}
        />
        <BoxColor
          r={Math.floor(Math.random() * 255)}
          g={Math.floor(Math.random() * 255)}
          b={Math.floor(Math.random() * 255)}
        />
        <BoxColor
          r={Math.floor(Math.random() * 255)}
          g={Math.floor(Math.random() * 255)}
          b={Math.floor(Math.random() * 255)}
        />
        <Rating rating={Math.random() * 5} />
        <Rating rating={Math.random() * 5} />
        <Rating rating={Math.random() * 5} />
        <Rating rating={Math.random() * 5} />
        <Rating rating={Math.random() * 5} />
      </div>
    );
  }
}

export default App;
