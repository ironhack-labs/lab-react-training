import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state={
        photo:this.props.img,
        comp:false
    }

    SwitchPhoto=()=>{
        this.setState(({comp}) => ({
            comp:!comp
          }));
    }
      
    render() {
        return (
            <div className="ClickablePicture">
            <img
            onClick={this.SwitchPhoto} src= { this.state.comp?`${this.props.imgClicked}`:`${this.props.img}`} alt="face"></img>
            </div>
            )
    }
}
