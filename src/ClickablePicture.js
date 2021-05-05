import React from 'react';

export default class ClickablePicture extends React.Component{ 
    
    state= {
        imgIndex: 0
    }

    toggleImage = (props) => {
        this.setState((state, props) => ({
            imgIndex: (state.imgIndex + 1)%2
        }))
    }

    render(){

        const imgPath = [
            this.props.img,
            this.props.imgClicked
        ];

        return (
        <img class='nineImg' src={imgPath[this.state.imgIndex]}  alt="image no glasses" onClick={this.toggleImage}/>
        )
    }

}