import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.imgBase = '/img/dice';
    this.imgEnd = '.png';
    this.emptyImg = '-empty';
    this.state = {
      img: this.imgBase + Math.floor(Math.random() * 6 + 1) + this.imgEnd,
    };
  }

  clickHandler = () => {
    this.setState((state, props) => ({
      img: this.imgBase + this.emptyImg + this.imgEnd,
    }));
    setTimeout(() => {
      this.setState((state, props) => ({
        img: this.imgBase + Math.floor(Math.random() * 6 + 1) + this.imgEnd,
      }));
    }, 1000);
  };

  render() {
    return (
      <img
        className="Dice"
        src={this.state.img}
        alt="Dice"
        onClick={this.clickHandler}
      />
    );
  }
}

export default App;
