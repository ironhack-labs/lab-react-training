import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        img: '/img/persons/maxence.png',
        clicked: false
    }

    updateImage = () => {

        if (this.state.clicked) {
            this.setState({
                img: '/img/persons/maxence.png',
                clicked: !this.state.clicked
            })
        } else {
            this.setState({
                img: '/img/persons/maxence-glasses.png',
                clicked: !this.state.clicked
            })
        }
    }

    render() {
        return (
            <div>
                <img className="driverCardImg" src={this.state.img} alt="" onClick={this.updateImage} />
            </div>
        )
    }
}

