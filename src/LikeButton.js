import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleIncrementClick = () => {
    console.log('counting...');

    this.setState({
      count: this.state.count + 1,
    });

  };

  render() {
    return (
      <div>
        <button className="likeButton" onClick={this.handleIncrementClick}> {this.state.count} Likes </button>
      </div>
    );
  }
}

export default Counter;