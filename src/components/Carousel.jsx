import React from 'react'

let carouselCount = 0

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            backPic: this.props.imgs[0]
        }
    }

    changeCarouselRight = () => {
        console.log(carouselCount)
        carouselCount++
        if (carouselCount === 4) {
            this.setState({backPic: this.props.imgs[0]})
            carouselCount = 0
        } else {
            this.setState({backPic: this.props.imgs[carouselCount]})
        }
    }

    changeCarouselLeft = () => {
        carouselCount--
        if (carouselCount === -1) {
            carouselCount = 3
            this.setState({backPic: this.props.imgs[carouselCount]})
        } else {
            this.setState({backPic: this.props.imgs[carouselCount]})
        }
        console.log(carouselCount)
    }

    render() {
        return (
            <div className="carousel row justify-content-around">
                <div className="left col-1" onClick={this.changeCarouselLeft}><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-from-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M152 412.5L3.5 264.5c-4.7-4.7-4.7-12.3 0-17L152 99.5c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L60.1 239H372c6.6 0 12 5.4 12 12v10c0 6.6-5.4 12-12 12H60.1L176 388.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.6 4.7-12.2 4.7-16.9 0zM436 64h-8c-6.6 0-12 5.4-12 12v360c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12z"></path></svg></div>
                <div className="carousel-img col-6" style={{background: `url(${this.state.backPic}) no-repeat center center / cover`}}></div>
                <div className="right col-1" onClick={this.changeCarouselRight}><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-from-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M296 99.5l148.5 148c4.7 4.7 4.7 12.3 0 17L296 412.5c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-115.4H76c-6.6 0-12-5.4-12-12v-10c0-6.6 5.4-12 12-12h311.9L272 123.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.6-4.7 12.2-4.7 16.9 0zM12 448h8c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12h-8C5.4 64 0 69.4 0 76v360c0 6.6 5.4 12 12 12z"></path></svg></div>
            </div>
        )
    }

}