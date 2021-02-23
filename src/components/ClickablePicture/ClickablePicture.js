import React, { Component } from 'react'
import './ClickablePicture.css'

export default class ClickablePicture extends Component {
    state = {
        img: '/img/persons/maxence.png'
    }
    changePicture = () => {
        let img = '/img/persons/maxence.png'
        let sunglasses = '/img/persons/maxence-glasses.png'
        if (this.state.img === img) {
            this.setState({ img: sunglasses })
        }
        if (this.state.img === sunglasses) {
            this.setState({ img: img })
        }

    }
    render() {
        return (

            <div onClick={this.changePicture} className='clickable'>
                <img src={this.state.img} alt="Maxence" />
            </div>

        )
    }
}
