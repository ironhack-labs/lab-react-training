import React from 'react';

class Carousel extends React.Component {
  state = {
    imgIndex : 0
  }

  showPrevious = () => {
    let imgIndex = this.state.imgIndex - 1;
    if (imgIndex < 0) {
      imgIndex = this.props.imgs.length;
    }
    this.setState({
      imgIndex
    })
  }

  showNext = () => {
    let imgIndex = this.state.imgIndex + 1;
    if (imgIndex === this.props.imgs.length) {
      imgIndex = 0;
    }
    this.setState({
      imgIndex
    })
  }

  render() {

    return(
      <div>
        <button onClick={this.showPrevious}> Previous </button>
        <img src={this.props.imgs[this.state.imgIndex]} alt="test"/>
        <button onClick={this.showNext}> Next </button>
      </div>
    );
  }
}

export default Carousel;