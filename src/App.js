import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
    </div>
  );
}

export default App;


function IdCard(lastName, firstName, gender, height, birth, picture) {
  return (
  <img src=picture/>
  <div>
    First name: {firstName}
    Last name: {lastName}
    Gender: {gender}
    Height: {height}
    Birth: {birth}
  </div>; )

}


function Greetings(lang, children) {
  if (lang == "de") {
    return <div>Hallo {children}</div>
  }

  if (lang == "en") {
    return <div>Hello {children}</div>
  }

  if (lang == "es") {
    return <div>Hola {children}</div>
  }

  if (lang == "fr") {
    return <div>Salut {children}</div>
  }

}


function Random(min, max) {
  let value = Math.floor(Math.random() * max)

  return <div>Random value between {min} and {max} =>  </div>
}