import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: '',
    };
    this.images = this.props.imgs;
    this.clickNext = this.clickNext.bind(this);
    this.clickPrev = this.clickPrev.bind(this);
  }

  componentDidMount() {
    this.setState({ currentImg: this.images[0] });
  }

  clickNext() {
    if (this.images.indexOf(this.state.currentImg) < this.images.length - 1) {
      this.setState({
        currentImg: this.images[this.images.indexOf(this.state.currentImg) + 1],
      });
    } else {
      this.setState({ currentImg: this.images[0] });
    }
  }
  clickPrev() {
    if (this.images.indexOf(this.state.currentImg) === 0) {
      this.setState({ currentImg: this.images[this.images.length - 1] });
    } else {
      this.setState({
        currentImg: this.images[this.images.indexOf(this.state.currentImg) - 1],
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.clickPrev}>Left</button>
        <img src={this.state.currentImg} alt="pict"/>
        <button onClick={this.clickNext}>Right</button>
      </div>
    );
  }
}
export default Carousel;