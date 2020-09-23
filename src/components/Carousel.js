import React, { Component } from 'react'


export default class Carousel extends Component {
    state = {
        imageNum: 1
    }
    
    handleLeftBtn = () => {
      this.setState((state) => ({ imageNum: this.state.imageNum > 0 ? this.state.imageNum - 1 : this.state.imageNum + 1 }))
    }

    handleRightBtn = () => {
        this.setState((state) => ({ imageNum: this.state.imageNum < 3 ? this.state.imageNum + 1 : 0 }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLeftBtn}>left</button>
                <img src={this.props.imgs[this.state.imageNum]} />
                <button onClick={this.handleRightBtn}>right</button>
            </div>
        )
    }
}
