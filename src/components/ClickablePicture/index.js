import React, { Component } from "react";
import "./style.css";

export default class ClickablePicture extends Component {
    state = {
        resultImage: this.props.img
    }

    handleClick = () => {
        const { img, imgClicked } = this.props;
        if(this.state.resultImage === img)
            this.setValue(imgClicked)
        else
            this.setValue(img)
    }

    setValue = (changeImg) => {
        this.setState({
            resultImage: changeImg
        });
    }
  
  render() {
    const { resultImage } = this.state;
    return (
        <div>
            <img src={resultImage} alt="iteration9" onClick={this.handleClick}/>
        </div>
    );
  }
}