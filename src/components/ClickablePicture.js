import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        clicked: false
    }

    clickHandler = () => {
        this.setState((state, props) => ({
            clicked: !state.clicked
        }))
    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <img onClick={this.clickHandler} src={this.state.clicked ? this.props.img : this.props.imgClicked} alt=""/>
            </div>
        )
    }
}
