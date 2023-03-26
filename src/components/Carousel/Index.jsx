import './Index.css';
import { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handlePrevClick = () => {
    const { index } = this.state;
    const { images } = this.props;
    if (index === 0) {
      this.setState({ index: images.length - 1 });
    } else {
      this.setState({ index: index - 1 });
    }
  }

  handleNextClick = () => {
    const { index } = this.state;
    const { images } = this.props;
    if (index === images.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: index + 1 });
    }
  }

  render() {
    const { index } = this.state;
    const { images } = this.props;
    return (
      <div className='Carousel'>
        <button className='Prev' onClick={this.handlePrevClick}>Anterior</button>
        <img src={images[index]} alt="Imagen del carrusel" />
        <button className='Next'onClick={this.handleNextClick}>Siguiente</button>
      </div>
    );
  }
}

export default Carousel;