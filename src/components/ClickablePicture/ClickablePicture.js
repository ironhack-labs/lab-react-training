import React, { Component } from 'react';

class ClickablePicture extends Component {
  render(){
    const { img } = this.props;
    return(
      <div><img src={img} alt='' /></div>
    )
  }
}

export default ClickablePicture; 