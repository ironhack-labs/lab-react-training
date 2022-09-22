import React, { Component } from "react";
import './ClickPicture.css'

class ClickPicture extends Component {
    state = {
        src : this.props.img
    }

    changePic = () => {
        const {img, imgClicked} = this.props
        this.setState((prevState) => {
            const newSrc = prevState.src == img ? imgClicked : img
            return{
                src: newSrc
            }
        })
        

    } 

    render(){
        
        return (
            <div>
                <img src={this.state.src} onClick={this.changePic}/>
            </div>
        )
    }

}

export default ClickPicture