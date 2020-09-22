import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actual: '',
    };
    this.images = this.props.imgs;
    this.clickNext = this.clickNext.bind(this);
    this.clickPrev = this.clickPrev.bind(this);
  }

  componentDidMount() {
    this.setState({ actual: this.images[0] });
  }

  clickNext() {
    if (this.images.indexOf(this.state.actual) < this.images.length - 1) {
      this.setState({
        actual: this.images[this.images.indexOf(this.state.actual) + 1],
      });
    } else {
      this.setState({ actual: this.images[0] });
    }
  }
  clickPrev() {
    if (this.images.indexOf(this.state.actual) === 0) {
      this.setState({ actual: this.images[this.images.length - 1] });
    } else {
      this.setState({
        actual: this.images[this.images.indexOf(this.state.actual) - 1],
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.clickPrev}>Anterior</button>
        <img src={this.state.actual} alt="" />
        <button onClick={this.clickNext}>Siguiente</button>
      </div>
    );
  }
}
export default Carousel;
