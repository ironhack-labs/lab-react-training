import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.imgsLgth = props.imgs.length;
    this.state = {
      index: Math.floor(Math.random() * this.imgsLgth),
    };
  }
  clickHandler = (direction) => {
    this.setState((state, props) => ({
      index:
        (((state.index + direction) % this.imgsLgth) + this.imgsLgth) %
        this.imgsLgth,
    }));
  };

  clickLeft = () => this.clickHandler(-1);
  clickRight = () => this.clickHandler(1);

  render() {
    const selectedImg = this.props.imgs[this.state.index];
    return (
      <div className="Carousel">
        <button onClick={this.clickLeft}>Left</button>
        <img src={selectedImg} alt="carousel" />
        <button onClick={this.clickRight}>Right</button>
      </div>
    );
  }
}

export default App;
