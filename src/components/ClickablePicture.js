import React, { Component } from 'react';

class ClickablePicture extends Component {

  state = {
    hasGlasses: false
  }

  handleClick = ()=>{
    this.setState({hasGlasses: !this.state.hasGlasses});
  }

  render() {
    return (
      <div>
        <img 
          src={this.state.hasGlasses?
            '../img/persons/maxence-glasses.png':
            '../img/persons/maxence.png' } 
          alt=""
          onClick={this.handleClick}
        />     
      </div>
    );
  }
}

export default ClickablePicture;