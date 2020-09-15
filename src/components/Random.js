import React, {Component} from "react"

class Random extends Component{
  render(){
    let num = Math.floor(Math.random()*(this.props.max - this.props.min + 1)) + this.props.min;
    return(
      <div className="box">Random value between {this.props.min} and {this.props.max} ={">"} {num}</div>
    )
  }
}

export default Random