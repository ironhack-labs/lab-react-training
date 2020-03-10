import React, { Component } from 'react';


class Dice extends Component {
  constructor(){
    super();
    this.state = {
      circles: 0
    }
    this.setCircles = this.setCircles.bind(this);
  }

  setCircles(){
    setTimeout(() => {
      this.setState({circles: 3});
    }, 1000)

    setTimeout(() => {
      this.setState({circles: 6});
    }, 2000)
    
    setTimeout(() => {
      this.setState({circles: 0});
    }, 3000)
  }

  render() {

    return (
      <div className="dice">
        <button onClick={this.setCircles}>
          {
            (this.state.circles === 3 && 
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="20"/>
                <circle cx="140" cy="140" r="20"/>
                <circle cx="230" cy="230" r="20"/>
              </svg>)
            || (this.state.circles === 6 && 
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="80" r="20"/>
                <circle cx="100" cy="150" r="20"/>
                <circle cx="100" cy="220" r="20"/>
                <circle cx="200" cy="80" r="20"/>
                <circle cx="200" cy="150" r="20"/>
                <circle cx="200" cy="220" r="20"/>
              </svg>)
            ||
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
          }
        </button>
      </div>
    );
  }
}

export default Dice;