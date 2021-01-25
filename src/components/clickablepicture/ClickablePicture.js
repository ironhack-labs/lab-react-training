import React, { Component } from 'react'

export class ClickablePicture extends Component {

    state = {
        imgClicked: false
    }

    handleImage = () => {
        let changeImg = ! this.state.imgClicked
        this.setState({
            imgClicked: changeImg
        })
    }

    render() {
        const img = '/public/img/persons/maxence.png'
        const imgClicked = '/public/img/persons/maxence-glasses.png'

        return (
            <div>
                <img src={this.state.imgClicked ? img : imgClicked} onClick={this.handleImage} alt='Maxence'/>
            </div>
        )
    }
}

export default ClickablePicture
