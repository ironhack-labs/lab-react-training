import React, {Component} from 'react';
import { clickPhoto } from '../styles/components'

export default class Clickable extends Component {
  state = {
    presionado: true
  };
  imgPres = () => {
    this.state.presionado
      ? this.setState({ presionado: false })
      : this.setState({ presionado: true });
  };
  render() {
    if (this.state.presionado) {
      return (
        <img onClick={() => this.imgPres()} src={this.props.img} alt="lol" />
      );
    } else {
      return (
        <img
          onClick={() => this.imgPres()}
          src={this.props.imgClicked}
          alt="lol"
        />
      );
    }
  }
}
