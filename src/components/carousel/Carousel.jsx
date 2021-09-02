import React from "react";
import "./Carousel.css"

export default class Carousel extends React.Component{
    state={
        imageNumber: 2
    }

    previousImage= () => {
        if (this.state.imageNumber > 0){
            this.setState({imageNumber: this.state.imageNumber -1})
        }
    }

    nextImage= () => {
        if (this.state.imageNumber < this.props.imgs.length - 1){
            this.setState({imageNumber: this.state.imageNumber +1})
        }
    }

    render(){
        let image = () => {
            return this.props.imgs[this.state.imageNumber]
        }

        return(
            <div className="carousel">
                <button onClick={this.previousImage}>Left</button>
                <img src={image()} alt="Carousel image"></img>
                <button onClick={this.nextImage}>Right</button>
            </div>
        )
    }
}