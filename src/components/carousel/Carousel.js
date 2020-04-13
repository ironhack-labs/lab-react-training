import React, {Component} from 'react';
import './style.css';

class Carousel extends Component {

  state = {
    index: 0
  };

  _prevImage = () => {
    const {index} = this.state;
    this.setState({
      index: index === 0 ? this.props.imgs.length - 1 : index -1
    })
  };

  _nextImage = () => {
    const {index} = this.state;
    this.setState({
      index: index === this.props.imgs.length - 1 ? 0 : index + 1
    })
  };

  render() {
    const {imgs} = this.props;
    return (
      <div className={'carousel'}>
        <span onClick={this._prevImage} className={'prev'}> {'<'} </span>
        <img src={imgs[this.state.index]} />
        <span onClick={this._nextImage} className={'next'}> {'>'} </span>
      </div>
    );
  }
}

export default Carousel;