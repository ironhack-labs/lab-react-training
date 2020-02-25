import React, { Component } from 'react';

class ClickablePicture extends Component {

    state ={
        imgDisplayed: this.props.img
    }

    toggleImg = () => {
        if (this.state.imgDisplayed === this.props.img){
            this.setState({
                imgDisplayed: this.props.imgClicked
            })
        }
        else {
            this.setState({
                imgDisplayed: this.props.img
            })
        }
    }

    render () {
        return(
            <img alt="" onClick={this.toggleImg} src={this.state.imgDisplayed} />
            
        )
    }
};

export default ClickablePicture;