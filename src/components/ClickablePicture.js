import React, { Component } from 'react'

export default class ClickablePicture extends Component {
  
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }

  changeImage = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const { img, imgClicked } = this.props
    return (
      <div onClick={this.changeImage}>
        {this.state.clicked ? <img src={img} alt="d"/> : <img src={imgClicked} alt="d"/> }
      </div>
    );
  }

  
}
