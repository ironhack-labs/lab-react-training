import React, { Component } from 'react';



class ClickablePicture extends Component {

  state = {
    withoutGlasses: true
}

  handleClick = () => {
    this.setState(
        {withoutGlasses : !this.state.withoutGlasses }
    );
}

  render() {
    return(
      <button onClick={this.handleClick}><img className="ClickablePicture" 
      src={this.state.withoutGlasses ? this.props.withoutGlassesImage : this.props.withGlassesImage} alt="glasses" /></button>
    )
  }
}


export default ClickablePicture;