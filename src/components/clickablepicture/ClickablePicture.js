import React, { Component } from 'react';
import style from './ClickablePicture.module.css';

export default class ClickablePicture extends Component {
  state = {
    imgWithGlasses: false
  }

  toggleImg = () => {
    const currentState = this.state.imgWithGlasses;
    this.setState({
      imgWithGlasses: !currentState
    });
  }

  render() {
    return (
      <>
        <img className={style.glassPicture} onClick={this.toggleImg} src={this.state.imgWithGlasses ? '/img/persons/maxence-glasses.png' : '/img/persons/maxence.png'} alt="toggle glasses" />
      </>
    )
  }
}

