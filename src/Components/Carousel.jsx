import React, { Component } from "react";

//Iteration 11
class Carousel extends Component {
    state = {
        counter: 0
      }

    handleIncrement = () => {
        this.setState({counter: this.state.counter + 1})
      }

    handleDecrement = () => {
        this.setState({counter: this.state.counter - 1})
      }

      render() {

        if (this.state.counter > 3){
            this.state.counter = 0;
        }

        if (this.state.counter < 0){
            this.state.counter = 3;
        }

        let number = this.state.counter;
        let imgsrc = this.props.imgs;
        
        return (
            <div>
            <img src={imgsrc[number]}></img><br/>
          <button onClick={this.handleDecrement}>Prev</button>
          <button onClick={this.handleIncrement}>Next</button>
            </div>
        )
      }
  }

export default Carousel;
