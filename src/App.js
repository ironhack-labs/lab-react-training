import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './componants/LikeButton';
import ClickablePicture from './componants/ClickablePicture';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h4>Iteration 8</h4>
      <LikeButton />

      <h4>Iteration 9</h4>
      <ClickablePicture
        img= '/img/persons/maxence.png'
        clickedImg= "/img/persons/maxence-glasses.png"
      />
    </div>
  );
}

export default App;
