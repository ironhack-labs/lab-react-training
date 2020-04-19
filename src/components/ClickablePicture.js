import React, { Component } from 'react';
import './ClickablePicture.css';

class ClickablePicture extends Component {
    state = {
        sunglasses: false
    };

    changeImg = () => {
        this.setState({
            sunglasses: !this.state.sunglasses
        });
    }

    render() {
        let imgToShow = '';
        let altToShow = '';
        const { img, imgClicked } = this.props;

        if (this.state.sunglasses) {
            imgToShow = imgClicked;
            altToShow = 'A guy with sunglasses';
        } else {
            imgToShow = img;
            altToShow = 'A guy without sunglasses';
        }

        return (
            <img className='ClickablePicture' src={imgToShow} alt={altToShow} onClick={this.changeImg} />
        );
    }
}

export default ClickablePicture;