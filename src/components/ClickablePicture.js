import React, { Component } from 'react'

class ClickablePicture extends Component {
  state = {
    isClicked: false,
  }

  showImg = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    })
  }
  render() {
    return (
      <div className="Click">
        <img style={{width: 200}}
          src={this.state.isClicked ? this.props.imgClicked : this.props.img}
          onClick={this.showImg}
          alt=""
        />
      </div>
    )
  }
}

export default ClickablePicture