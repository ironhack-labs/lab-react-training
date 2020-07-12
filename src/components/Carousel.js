import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import { Carousel as CarouselComponent } from 'react-responsive-carousel';

class Carousel extends Component {
  render() {
    const images = this.props.imgs.map((img, index) => {
      const cssImg = 'img' + (index + 1);
      return (
        <div className="carouselImage" key={cssImg}>
          <img src={img} alt="" />
        </div>
      );
    });
    return (
      <div className="carousel-wrapper" style={{ height: 100 }}>
        <CarouselComponent useKeyboardArrows>{images}</CarouselComponent>
      </div>
    );
  }
}
export default Carousel;
