import React, { Component } from 'react'

export default class Carousel extends Component {

    state = {
        num: 0
    }

    nextImg = () => {
        if (this.state.num < (this.props.imgs.length - 1)) {
            this.setState({
                num: this.state.num + 1
            })
        }
        console.log(this.state.num)
    }

    prevImg = () => {
        if (this.state.num > 0) {
            this.setState({
                num: this.state.num - 1
            })
        }
        console.log(this.state.num)
    }

    render() {
        return (
            <div>
                <img className="" src={this.props.imgs[this.state.num]} alt="" />
                <br />
                <button className='carouselButton' style={{backgroundColor: "blue"}} onClick={this.prevImg}>Previous Image</button>
                <button className='carouselButton' style={{backgroundColor: "blue"}} onClick={this.nextImg}>Next Image</button>
            </div>
        )
    }
}




