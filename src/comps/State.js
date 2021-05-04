// imports
import React from 'react';

//components
class State extends React.Component {
  state = {
    name: 'German',
    numberImg: 1,
  };
  changeName = () => {
    if (this.state.name === 'German') {
      this.setState({ name: 'Pedro' });
    } else if (this.state.name === 'Pedro') {
      this.setState({ name: 'German' });
    }
  };
  changeGif = () => {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    this.setState({ numberImg: randomNum });
  };
  render() {
    return (
      <div className="State">
        <h1> Hola, {this.state.name}</h1>

        <button onClick={() => this.changeName()}>Change Name</button>

        <div>
          <img
            src={
              process.env.PUBLIC_URL + `/img/dice${this.state.numberImg}.png`
            }
            alt="DICE"
          />

          <button onClick={() => this.changeGif()}>Change img</button>
        </div>
      </div>
    );
  }
}

// exports
export default State;
