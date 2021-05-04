import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    const ini = Math.floor(Math.random() * props.imgs.length);
    this.state = {
      img: props.imgs[ini],
      index: ini,
    };
  }

  clickHandler = (direction) => {
    this.setState((state, props) => {
      const nextIndex = (state.index + direction) % props.imgs.length;
      return {
        img: props.imgs[nextIndex],
        index: nextIndex,
      };
    });
  };

  clickLeft = () => this.clickHandler(-1);
  clickRight = () => this.clickHandler(1);

  render() {
    return (
      <div className="Carousel">
        <button onClick={this.clickLeft}>Left</button>
        <img src={this.state.img} alt="carousel" />
        <button onClick={this.clickRight}>Right</button>
      </div>
    );
  }
}

export default App;
