import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//Key generator
const Cerobee = require('clerobee')
const cerobee = new Cerobee( 20 )

class DemoCarousel extends Component {

    
    addPicture = () => {
        let pictures = []
        this.props.imgs.forEach((image) => {
                pictures.push( <div key={cerobee.generate()}>
                    <img src={image} alt='carousel-item'/>
                </div>)
        });

        return pictures

    }

    render() {

        return (
            <Carousel width='300px' className='pl-2 Carousel__body d-flex flex-column align-items-center' >
                
                {this.addPicture()}
                 
            </Carousel>
        );
    }
}

export default DemoCarousel