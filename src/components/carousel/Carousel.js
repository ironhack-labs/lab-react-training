import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";     
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'

class Carouse extends Component {

    render() {
        return (<>
           <Carousel className = "carousel">
                <div>
                    <img className = "img-carousel" src='https://randomuser.me/api/portraits/women/1.jpg' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className = "img-carousel" src='https://randomuser.me/api/portraits/men/1.jpg' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className = "img-carousel" src='https://randomuser.me/api/portraits/women/2.jpg' />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img  className = "img-carousel" src=  'https://randomuser.me/api/portraits/men/2.jpg' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

        </>

        )
    }
}

export default Carouse