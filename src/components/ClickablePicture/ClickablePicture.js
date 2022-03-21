import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        clicked: false
    }
    toggleState = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

  render() {
      const { img, imgGlasses } = this.props
    return (
      <div>
          <img
            src={this.state.clicked ? img : imgGlasses}
            onClick={this.toggleState}
            alt="img"
          />
      </div>
    )
  }
}
