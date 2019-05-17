import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = { 
    currentPicture: this.props.img
   }

   changePicture = () => { 
     this.setState({
       currentPicture: this.props.img === this.state.currentPicture ? this.props.imgClicked : this.props.img
     })
   }

  render() { 
    const divStyle = {
      width: '180px'
    }

    return ( 
      <img src={this.state.currentPicture} alt="random" onClick={this.changePicture} style={divStyle}/>
     );
  }
}
 
export default ClickablePicture;