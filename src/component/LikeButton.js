import React from 'react';
import './LikeButton.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.colorsArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    this.state = { counter: 0 };
  }

  clickHandler = () => {
    this.setState((state, props) => ({
      counter: state.counter + 1,
    }));
  };

  render() {
    const divStyle = {
      backgroundColor: this.colorsArray[
        Math.floor(Math.random() * this.colorsArray.length)
      ],
    };

    return (
      <button
        className="likebuttonState"
        onClick={this.clickHandler}
        style={divStyle}
      >
        {this.state.counter} Likes
      </button>
    );
  }
}

export default App;
