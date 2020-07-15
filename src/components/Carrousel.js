import React, { Component } from 'react'

export default class Carrousel extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            index: 0,
        })
    }

    nextPic = (event) => {
        if (event.target.id === 'previous') {
            if (this.state.index === 0) {
                this.setState({
                    index: this.props.imgs.length - 1
                })
            } else {
                this.setState({
                    index: (this.state.index - 1)
                })
            }
        } else {
            if (this.state.index === (this.props.imgs.length - 1)) {
                this.setState({
                    index: 0
                })
            } else {
                this.setState({
                    index: (this.state.index + 1)
                })
            }
        }
    }

    render() {

        return (
            <div className="carrouselDiv">
                <button id="previous" onClick={this.nextPic}>Previous</button>
                <img src={this.props.imgs[this.state.index]} alt={this.props.imgs[this.state.index]} />
                <button id="next" onClick={this.nextPic}>Next</button>
            </div>
        )
    }
}
