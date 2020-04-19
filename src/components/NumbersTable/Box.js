import React, { Component } from 'react'; 
import './NumbersTable.css';

class Box extends Component {
  handleStyle =()=> {
    const { num } = this.props;
    let style = ''
    if(num%2){
      style = 'white'
    } else {
      style = 'red'
    }
    return style;
  }
  render(){
    const {num} = this.props;
    return (<div style={{'backgroundColor': this.handleStyle()}} className="BoxTable" >{num}</div>)
  }
}

export default Box;