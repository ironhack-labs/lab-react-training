import React from 'react';
import './LikeButton.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.colorsArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    this.state = {
      counter: 0,
      divStyle: {
        backgroundColor: this.colorsArray[
          Math.floor(Math.random() * this.colorsArray.length)
        ],
      },
    };
  }

  /* 
  state = {
    counter: 0
  }
  */

  clickHandler = () => {
    this.setState((state, props) => ({
      counter: state.counter + 1,
      divStyle: {
        backgroundColor: this.colorsArray[
          Math.floor(Math.random() * this.colorsArray.length)
        ],
      },
    }));
  };

  render() {
    return (
      <button
        className="likebuttonState"
        onClick={this.clickHandler}
        style={this.state.divStyle}
      >
        {this.state.counter} Likes
      </button>
    );
  }
}

export default App;
