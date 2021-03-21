import React, { Component } from "react";

// class LikeButton extends Component {
//     state = {
//         counter: 0
//       };
//       handleIncrement = () => {
//         this.setState({ counter: this.state.counter + 1 }, () => {
//           console.log(this.state);
//           //If youwant to log your state after it has changed
//           // you can use the callback
//           console.log(this.state.counter, "in callback");
//         });
//         console.log(this.state.counter, "State not in call back");
//         // console.log("I am increment");
//       };
//       render(){
//           return (
//           <div>
//             <button onClick={this.handleIncrement}>{this.state.counter}{this.state.counter === 1 ? <div>Like</div> : <div>Likes</div>}</button>
//           </div>);
//       }
//   }


class LikeButton extends Component {


  state = {
    counter: 1,
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
    });
  };


  render() {
   

    return (
      <div>
        <h1>
          {this.props.person} has {this.state.counter} likes
        </h1>

        {/* Guard operator */}
        {this.state.counter > 10 && <div>{this.props.positiveMessage}</div>}
        {this.state.counter <= 10 && <div>{this.props.negativeMessage}</div>}
        {/* <h3>{this.state.counter > 10 ? <div>Yay</div> : <div>Naaay</div>} </h3> */}

        {/* <h3>{message}</h3> */}

        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        {/* <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Decrement
        </button> */}
      </div>
    );
  }
}

export default LikeButton;
