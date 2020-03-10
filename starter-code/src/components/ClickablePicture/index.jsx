import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor(){
    super();
    this.state = {
      active: false
    };
    this.setToggle = this.setToggle.bind(this);
  }

  setToggle(){
    this.setState(previousState => {
      return {
        active: !previousState.active
      }
    })
  }

  
  render() {
    const {img, imgClicked} = this.props;
    return (
      <div className='clickPic'> 
          <button onClick={this.setToggle}>
            {
              (this.state.active && <img src={imgClicked} alt="clickPic"></img>) || <img src={img} alt="clickPic"></img>
            }
          </button>
      </div>
    );
  }
}

export default ClickablePicture;