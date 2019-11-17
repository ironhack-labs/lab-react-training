import React, { Component } from 'react';

export class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    }
}
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const imageName = this.state.open ? this.props.img : this.props.imgClicked;
    // console.log(imageName)
    return (
      <div>
        <img className="ClickablePicture" onClick={this.toggleImage} src={imageName} alt="" />
      </div>
    )
  }
}

export default ClickablePicture
