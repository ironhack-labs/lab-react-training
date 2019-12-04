import React, { Component } from 'react';


class Carousel extends Component {
    state = {
        "clicksR": 0,
        "clicksL": 0,
        "clickedR": false,
        "clickedL": false,
        cIdx: 1
    }

    ciclycIndex = (isLeft) => {

        !(((this.state.clicksR ||this.state.clicksL )% this.props.imgs.length === 0))
            ? this.setState({
                "cIdx": this.state.clickedR ? this.state.cIdx + 1 : this.state.cIdx - 1
            })
            : this.setState({
                "cIdx": 1
            })
            console.log(this.state)

    }
    isClickedR = () => {
        this.setState({
            "clickedR": !this.state.clickedR,
            "clicksR": this.state.clicksR + 1
        })
        this.ciclycIndex()
    }
    isClickedL = () => {
        this.setState({
            "clickedL": !this.state.clickedL,
            "clicksL": this.state.clicksL + 1
        })
        this.ciclycIndex()
    }

    render() {
        return (
            <div id="Carousel">
                <button
                    onClick={this.isClickedL}
                >left</button>
                <img
                    src={this.props.imgs[this.state.cIdx - 1]} alt="" />
                <button
                    onClick={this.isClickedR}
                >right</button>
            </div>
        )
    }

}

export default Carousel;