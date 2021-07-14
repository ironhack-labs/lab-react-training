import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        counter: 0,
        liked: false,
        color: ['purple','blue','green','yellow','orange','red'],
        index: 0
      }
      clickHandler = () => {
        this.setState((state) => ({
          counter: state.counter + 1
        }));
        if (this.state.index >= 5) {
            this.setState((state) => ({
                index: 0
              }));
        } else {
            this.setState((state) => ({
                index: state.index + 1
              }));
        };
      }    

      render() { 
        return (
           <button onClick={this.clickHandler} 
           style= {{backgroundColor: this.state.color[this.state.index]}} >
           {this.state.counter}
           </button>
        )
    }
}


