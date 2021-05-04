import React from 'react';
import './index.css';

class ClickablePicture extends React.Component {
  state = {
    clicked: false
  }

  switch = (state, props) => {
    this.setState((state, props) => {
      return {
        clicked: !state.clicked
      }
    })
  }

  render() {
    return (
      <img onClick={ this.switch } src={ this.state.clicked ? this.props.imgClicked : this.props.img } alt="not me" />
    )
  }
}


export default ClickablePicture