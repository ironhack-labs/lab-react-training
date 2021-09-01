import React from 'react';
import './ClickablePicture.css';

export default class ClickablePicture extends React.Component {
  state = {
    clicked: false
  };

  toggleClick = () => {
    this.setState((state) => ({
      clicked: !state.clicked
    }))
  };

  render() {
    return (
      <div className='ClickablePicture'>
        <img onClick={this.toggleClick} src={this.state.clicked ? this.props.imgClicked : this.props.img}></img>
      </div>
    )
  }
}