import React, { Component } from 'react';


class LikeButton extends Component {
  constructor(){
    super();
    this.state = {
      counter:0,
      colorButton: 1
      
    };

    this.handleIncremetClick = this.handleIncremetClick.bind(this);

  };

  handleIncremetClick(){
    let colorChoice;

    if(this.state.colorButton < 5){
      colorChoice = this.state.colorButton+1;
    }else{
      colorChoice = 0
    }
    this.setState (previousState => ({
      counter: previousState.counter+1,
      colorButton:colorChoice
      
    }));
  }


  
  render() {
    const arrayColors = ['purple','blue','green','yellow','orange','red'];
    const buttonStyle = {
      color: 'white',
      backgroundColor: arrayColors[this.state.colorButton],
      padding: '2em'
  };
    
    return (
    <div className="App">
      <button style={buttonStyle} onClick={this.handleIncremetClick}>{this.state.counter} Likes</button>
    </div>)
  }
};


export default LikeButton;