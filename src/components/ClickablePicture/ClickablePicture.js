import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
      show: false,
    };


  changeShow = () => {
    this.setState({ show: !this.state.show })
  }


  render(){
    const { img, imgClicked } = this.props;
    return(
      <div><img onClick={this.changeShow} src={this.state.show ? imgClicked :img } alt='' /></div>
    )
  }
}

export default ClickablePicture; 