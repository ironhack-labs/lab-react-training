import React, { Component } from 'react'

export class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    count: 0,
    bgcolor:'purple'
  }
}
handleClick = () => {
  let colorArr = ['purple','blue','green','yellow','orange','red'];
  let newColor = colorArr[(this.state.count + 1)%colorArr.length];
  
  // console.log(newColor);

  this.setState(({ count }) => ({
    count: count + 1
  }));
  this.setState({
    bgcolor: newColor
 });
};

  render() {
    return (
        <button className="likebuttonclick" onClick={this.handleClick} style={{backgroundColor:this.state.bgcolor}}><span>{this.state.count}</span> Likes</button>
    )
  }
}

export default LikeButton
