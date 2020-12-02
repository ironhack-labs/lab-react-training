import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        clicked: false
    }

    onclickHandler = () => {
        this.setState((state) => ({ clicked: !this.state.clicked }))
    }

    render() {
        return (
            <div>
                <img src={ this.state.clicked ? this.props.img : this.props.imgClicked } onClick={this.onclickHandler} alt="profile image"/>
            </div>
        )
    }
}

