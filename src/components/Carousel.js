import React, { Component } from 'react';

function Button(props) {
  return(
    <button onClick={props.handleClick} dir={props.direction}>{props.direction < 0 ? '<':'>'}</button>
  )
}

class Carousel extends Component {

  state = {
    currImg: 0
  }

  handleClick = (e) => {
    e.preventDefault();
    let imgIdx = this.state.currImg + parseInt(e.currentTarget.attributes['dir'].value);
    if(imgIdx < 0) imgIdx = this.props.imgs.length - 1;
    if(imgIdx >= this.props.imgs.length) imgIdx = 0;

    this.setState({currImg: imgIdx});
  }

  render() {
    return (
      <div className="carousel-container">
        <Button handleClick={this.handleClick} direction={-1} />
        <img src={this.props.imgs[this.state.currImg]} alt=""/>
        <Button handleClick={this.handleClick} direction={1} />
      </div>
    );
  }
}

export default Carousel;