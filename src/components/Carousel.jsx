import { Component } from 'react';
import { Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Carousel1 extends Component {
  constructor(props) {
    super(props);
    this.slides = props.images;
  }

  render() {
    return (
      <Carousel width={200} infiniteLoop>
        {this.slides.map((slide, index) => {
          return (
            <Image src={slide} key={index} width={200} objectFit="cover" />
          );
        })}
      </Carousel>
    );
  }
}

export default Carousel1;
