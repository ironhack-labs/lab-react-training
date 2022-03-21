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
    return (
      <div>
          <img
            src={this.state.clicked ? this.props.img : this.props.imgGlasses}
            onClick={this.toggleState}
            alt="img"
          />
      </div>
    )
  }
}


// const { img, imgGlasses } = props;

