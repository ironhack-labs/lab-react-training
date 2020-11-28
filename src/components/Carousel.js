import React, { Component } from 'react';

class Carousel extends Component {

    state = {
        img: 0
    }

    moveCarousel(direction) {
        let pos = this.state.img + direction;

        if (pos > 3) {
            pos = 0
        } else if (pos < 0) {
            pos = 3
        }

        return this.setState({
            img: pos
        })
    }

    render({imgs}=this.props) {

        return (
            <div className='carouselCont'>
                <button onClick={
                    (e) => {
                        this.moveCarousel(-1)
                    }
                }>
                Left
                </button>
                <img src={imgs[this.state.img]}/>
                <button onClick={
                    (e) => {
                        this.moveCarousel(1)
                    }
                }>
                Right
                </button>
            </div>
        )

    }

}

export default Carousel;