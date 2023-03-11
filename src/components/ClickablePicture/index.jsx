import React, { Component } from 'react';
import './index.css'

class ClickablePicture extends Component {
  state = {
    imgClicked: false
  }
  render() {
    const {img, imgClicked} = this.props
    const handleClick = () => {
      this.setState(prevState => ({imgClicked: !prevState.imgClicked}))
    }

    return (
      <div className='ClickablePicture'>
        {this.state.imgClicked ?
        <img src={imgClicked} onClick={handleClick}/> 
        : <img src={img} onClick={handleClick}/>
        }
      </div>
    );
  }
}

export default ClickablePicture;