import React, { Component } from 'react'

export default class Caroussel extends Component {
    constructor(props){
        super(props)
        this.state = {
            idx: 0,
            images: props.images
        }
    }
    

    nextImg = () => {
        const {idx, images} = this.state;
        const next = idx === images.length - 1 ? 0 : idx + 1;
        this.setState({idx: next})
    }

    prevImg = () => {
        const {idx, images} = this.state;
        const prev = idx === 0 ? images.length - 1 : idx - 1;
        this.setState({idx: prev})
    }


    render() {
        const {idx, images} = this.state;

        return (
            <div>
                <img src={images[idx]} alt=""/>
                <div>
                    <button onClick={this.prevImg}>Prev</button>
                    <button onClick={this.nextImg}>Next</button>
                </div>
            </div>
        )
    }
}
