import "./index.css"
import React, { Component } from 'react';


class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
          images: props.images,
          image: props.images[0]
        };
      }

    handleLeft = () => {
        const arrImages = [...this.state.images]
        const currentIndex = arrImages.indexOf(this.state.image)
        const PrevImage =  (currentIndex - 1) % arrImages.length

        if(PrevImage <= 0) {
            this.setState({
                image: this.props.images[0]
            })
        } else {
            this.setState({
                image: arrImages[PrevImage]
            })
        }
    }

    handleRight = () => {
        const arrImages = [...this.state.images]
        const currentIndex = arrImages.indexOf(this.state.image)
        const nextImage =  (currentIndex + 1) % arrImages.length

            this.setState({
                image: arrImages[nextImage]
            })
        }

    

    render() {
        return (
            <div className="Carousel">

            <button onClick={this.handleLeft}> Previous Image</button>
            <img src={this.state.image} alt=""></img>
            <button onClick={this.handleRight}> Next Image</button>

                
            </div>
        );
    }
}

export default Carousel;