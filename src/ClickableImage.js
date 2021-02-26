import React, { Component } from 'react'

export default class ClickableImage extends Component {

    state = {
        image: this.props.img
      }

    clickHandler = () => {
        this.setState((state, props) => ({
            image: this.props.imgClicked
            }))
    }

    render() {
        return (
            <div>
                <img
                onClick={this.clickHandler}
                src={this.state.image}
                style={{height:'200px'}}
                alt="" />
            </div>
        )
    }
}
