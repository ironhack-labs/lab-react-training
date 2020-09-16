import React, {Component} from "react"

export default class LikeButton extends Component{

  state = 
  {
    value: 0
  }

  changeLikes = () => 
  {
      this.setState({value: this.state.value + 1})
  }

  render(){
    return(
      <button onClick={this.changeLikes}>{this.state.value} {this.state.value === 1 ? 'Like' : 'Likes'}</button>
    )
  }
}