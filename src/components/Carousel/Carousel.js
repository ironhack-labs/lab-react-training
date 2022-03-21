import React, { Component } from 'react'

import './Carousel.css'

class Carousel extends Component {
    state = {
        position: 0
    }

    prev() {
        if ((this.state.position - 1) < 0){
            this.setState({
            position: ((this.props.images.length) - 1)
            })
        } else {
            this.setState({
            position: (this.state.position - 1)
            })
        }
    }

    next(){
        if (this.state.position + 2 > this.props.images.length){
            this.setState({
                position: 0
            })
        } else {
            this.setState({
            position: (this.state.position + 1)
            })
        }
    }

    render(){
        return(
            <div className='carousel'>
                <img src={this.props.images[this.state.position]} alt={this.state.position} />
                <div className='carousel-buttons'>
                    <button onClick={() => this.prev()} > Prev </button>
                    <button onClick={ () => this.next()} > Next </button>
                </div>
            </div>
        )
    }
}

export default Carousel