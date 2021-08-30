import React from 'react';
import './Carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class CarouselImg extends React.Component {
  render() {
    return (
      <div className="CarouselImg">
        <Carousel>
          <div>
            <img src={this.props.imgs[0]} alt="Img 1" />
          </div>
          <div>
            <img src={this.props.imgs[1]} alt="Img 2" />
          </div>
          <div>
            <img src={this.props.imgs[2]} alt="Img 3" />
          </div>
          <div>
            <img src={this.props.imgs[3]} alt="Img 4" />
          </div>
        </Carousel>
      </div>
    );
  }
}
