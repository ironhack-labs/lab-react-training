import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        clickedPicture: false
    }

    changeState = () => {
        this.setState({
            clickedPicture: !this.state.clicked
        })
    }

    

  render() {
    const {img,imgGlasses} = this.props

    return (
          <img
            src={this.state.clicked ? img : imgGlasses}
            onClick={this.changeState}
            alt="ironhacker"
          />
    )
  }
}