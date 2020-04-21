import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        currentImage: 0,
    }

    getImageRight(){
        this.state.currentImage += 1;
        
        this.setState({
            currentImage: this.state.currentImage
        })
    }

    getImageLeft(){
        this.state.currentImage -= 1;
        
        this.setState({
            currentImage: this.state.currentImage
        })

    }
    render(){
        
        return(
            <div>
                <div className="btn-carousel">
                    <button onClick={() => (this.getImageLeft())}>Left</button>
                    <button onClick={() => (this.getImageRight())}>Right</button>
                </div>
                
                <img className="img-carousel" src={this.props.imgs[this.state.currentImage]} />

            </div>

        )
    }
}

export default Carousel;