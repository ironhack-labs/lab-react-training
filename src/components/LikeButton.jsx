import React, { Component } from "react";

class LikeButton extends Component{

  state = {
    counter: 0,
     };

    
  
 

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {

 
      console.log(this.state);
      //If youwant to log your state after it has changed
      // you can use the callback
      console.log(this.state.counter, "in callback");
    });
    console.log(this.state.counter, "State not in call back");
    // console.log("I am increment");
  };


  render() {
  

    return (
      <div>

        {/* Guard operator */}
        {this.state.counter > 10 && <div>happy</div>}
     
       

        <button onClick={this.handleIncrement}>{this.state.counter}likes</button>
      
        
      </div>
    );
  }
}



export default LikeButton;