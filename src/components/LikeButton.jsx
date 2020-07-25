import React, { Component } from 'react';

export class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      click: 0,
      bgColor: 'green',
    };
  }

  contador = () => {
    const colores = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const randomColor = colores[Math.floor(Math.random() * 5)];

    //cuenta del contador

    const currentClick = this.state.click;

    this.setState({ click: currentClick + 1, bgColor: randomColor });
  };
  render() {
    return (
      <button
        onClick={this.contador}
        style={{ backgroundColor: this.state.bgColor }}
      >
        Likes {this.state.click}
      </button>
    );
  }
}

export default LikeButton;
