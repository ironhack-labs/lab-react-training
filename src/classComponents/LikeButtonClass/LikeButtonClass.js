import React from 'react';

class LikeButtonClass extends React.Component {
  constructor(props) {
    super(props);
    this.colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    this.state = {
      like: 0,
      back: this.colors[0],
      colorOne: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  setColor() {
    let num = this.state.colorOne;
    if (num < this.colors.length - 1) {
      num += 1;
    } else {
      num = 0;
    }
    return num;
  }

  handleClick() {
    this.setState((state) => ({
      like: this.state.like + 1,
      colorOne: this.setColor(),
      back: this.colors[this.setColor()],
    }));
  }

  render() {
    return (
      <article>
        <button
          onClick={() => this.handleClick()}
          style={{ backgroundColor: this.state.back }}
        >
          Like {this.state.like}
        </button>
      </article>
    );
  }
}

export default LikeButtonClass;
