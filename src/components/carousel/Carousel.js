import React, { Component } from 'react'

export class Carousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0
        }
    }


    handleLeft = () => {
        if (this.state.index <= 0) {
            this.setState({
                index: 3
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
        
    }

    handleRight =() => {
        if (this.state.index >= 3) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLeft}>Left</button>
                <img src={this.props.imgs[this.state.index]} alt={this.state.index} />
                <button onClick={this.handleRight}>Right</button>
            </div>
        )
    }
}

export default Carousel
