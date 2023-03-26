import React from 'react';
import './index.css'

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            images: props.images,
            image: props.images[0]
        }
    }

    handleLeftImage = () => {
        const arrImages = this.state.images
        const currentIndex = arrImages.indexOf(this.state.image)
        const nextImage = (currentIndex - 1) % arrImages.length
        if (nextImage < 0) {
            this.setState({
                image: arrImages[arrImages.length-1]
            })
        }else {
        this.setState({
            image: arrImages[nextImage]
        })
    }
    }

    handleRightImage = () => {
        const arrImages = this.state.images
        const currentIndex = arrImages.indexOf(this.state.image)
        const nextImage = (currentIndex + 1) % arrImages.length
       
        this.setState({
            image: arrImages[nextImage]
        })
    }

    render() {
    return (
        <div className='Carousel'>
            <button onClick={this.handleLeftImage}>Left</button>
            <img src={this.state.image}/>
            <button onClick={this.handleRightImage}>Right</button>
        </div>
    );
}
};

export default Carousel;