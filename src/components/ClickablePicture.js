import React from 'react';
import '../assets/css/ClickablePicture.css'

class ClickablePicture extends React.Component {
    state = {
        imageClicked: './img/persons/maxence.png'
    }

    addPicture = () => {
        if (this.state.imageClicked === './img/persons/maxence.png') {
            this.setState({
                imageClicked: './img/persons/maxence-glasses.png'
            })
        } else {
            this.setState({
                imageClicked: './img/persons/maxence.png'
            })
        }
    }

    render() {
        return(
            <img className='ClickablePicture' src={this.state.imageClicked} onClick={this.addPicture} alt=''/>
        )
    }
}

export default ClickablePicture;