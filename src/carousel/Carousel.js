import React, { Component } from 'react'

export default class Carousel extends Component {
    state = {
        count: 0
    }

    handleRightBtnClick = () => {
        this.setState({
            count: this.state.count === this.props.imgs.length - 1 ? 0 : this.state.count + 1
        })
    }

    handleLeftBtnClick = () => {
        this.setState({
            count: this.state.count === 0 ? this.props.imgs.length - 1 : this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <img src={this.props.imgs[this.state.count]} width="100" /><br />
                <button onClick={this.handleLeftBtnClick}>Left</button> <button onClick={this.handleRightBtnClick}>Right</button>
            </div>
        )
    }
}
