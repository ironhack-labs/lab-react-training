import React, { Component } from 'react';

class Greetings extends Component {

      state = { 
        lang:this.props.lang,
        children:this.props.children
      }

  
  render(){
    return (
        <p>{this.state.children}</p>
    )}
}

export default Greetings;