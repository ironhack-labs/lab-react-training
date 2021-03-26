import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../assets/css/Carousel.css'


class DemoCarousel extends Component {

    addCarouselItem = () => {
        let myCarousel = []
        this.props.imgs.forEach((item, i)=> {
            myCarousel.push(
                <div>
                    <img src={item} className="carousel__img" alt={item}/>
                    <p className="legend">Legend {i}</p>
                </div>
            )
        })
        return myCarousel
    }

    render() {
        return (
            <Carousel className="Carousel__card" width="20%" >
                {this.addCarouselItem()}
            </Carousel>
        )
    }
}

export default DemoCarousel