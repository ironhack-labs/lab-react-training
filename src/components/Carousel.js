import React, { Component } from 'react'

export default class Carousel extends Component {
    
    state = {
        img: this.props.imgs[0],
        index: 0
    }

    clickLeft = () => {
        switch (this.state.index) {
            case 0:
                this.setState({ img: this.props.imgs[3], index: 3 })
                break;
            case 1:
                this.setState({ img: this.props.imgs[0], index: 0 })
                break;
            case 2:
                this.setState({ img: this.props.imgs[1], index: 1 })
                break;
            case 3:
                this.setState({ img: this.props.imgs[2], index: 2 })
                break;
            default:
                break;
        }
        
    }

    clickRight= () => {
        switch (this.state.index) {
            case 0:
                this.setState({ img: this.props.imgs[1], index: 1 })
                break;
            case 1:
                this.setState({ img: this.props.imgs[2], index: 2 })
                break;
            case 2:
                this.setState({ img: this.props.imgs[3], index: 3 })
                break;
            case 3:
                this.setState({ img: this.props.imgs[0], index: 0 })
                break;
            default:
                break;
        }
        
    }
 
    render() {
        return (
        <div className="Carousel card mb-3">
            <div className="row m-3">
                <div className="col">
                    <span onClick={this.clickLeft} > ⬅️ </span>
                </div>
                <div className="col-8">
                    <div className="card-body py-0">
                        <img className="CarouselImg" src={this.state.img} alt="Carousel"/>
                    </div>
                </div>
                <div className="col">
                    <span onClick={this.clickRight} > ➡️ </span>
                </div>
            </div>
        </div>
        )
    }
}