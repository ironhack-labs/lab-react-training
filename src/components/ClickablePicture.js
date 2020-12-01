import React, { Component } from 'react';

class ClickablePicture extends Component {

    state = {
        img: this.props.img
    }

    toggleImg = (img1, img2) =>{
        if(this.state.img == img1){
            this.setState({img: img2})
        }else{
            this.setState({img: img1})
        }
    }
    render({img, imgClicked} = this.props){
        return (
            <img src={this.state.img} onClick={() => {this.toggleImg(img, imgClicked)}} className="clickable-img"></img>
        );
    }
}

export default ClickablePicture;