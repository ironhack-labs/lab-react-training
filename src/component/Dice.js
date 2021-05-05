import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.imgBase = '/img/dice';
    this.imgEnd = '.png';
    this.emptyImg = '-empty';
    this.state = {
      idx: Math.floor(Math.random() * 6 + 1),
    };
  }

  clickHandler = () => {
    this.setState({ idx: 0 });
    setTimeout(() => {
      this.setState({ idx: Math.floor(Math.random() * 6 + 1) });
    }, 1000);
  };

  render() {
    const img =
      this.state.idx > 0
        ? this.imgBase + this.state.idx + this.imgEnd
        : this.imgBase + this.emptyImg + this.imgEnd;
    return (
      <img className="Dice" src={img} alt="Dice" onClick={this.clickHandler} />
    );
  }
}

export default App;
