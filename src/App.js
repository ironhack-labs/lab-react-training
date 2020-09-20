import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard.js';

class App extends React.Component {
  state = {
    IdCardA: {
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      height: 1.78,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    IdCardB: {
      firstName: 'Obrien',
      lastName: 'Delores',
      gender: 'female',
      height: 1.72,
      birth: new Date('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  };
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
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
        </header> */}
        <div className="IdCards box">
          <h1>IdCard</h1>
          <IdCard
            firstName={this.state.IdCardA.firstName}
            lastName={this.state.IdCardA.lastName}
            gender={this.state.IdCardA.gender}
            height={this.state.IdCardA.height}
            birth={this.state.IdCardA.birth}
            picture={this.state.IdCardA.picture}
          />
          <IdCard
            firstName={this.state.IdCardB.firstName}
            lastName={this.state.IdCardB.lastName}
            gender={this.state.IdCardB.gender}
            height={this.state.IdCardB.height}
            birth={this.state.IdCardB.birth}
            picture={this.state.IdCardB.picture}
          />
        </div>
      </div>
    );
  }
}

export default App;
