import React, { Component } from 'react';
import './clickable-picture.css';

export default class ClickablePicture extends Component {
    change = (img) => {
        this.props.changePic(img);
    }
    render() {
        return (
            <div className="pic">
               <button onClick={()=>{this.change(this.props.img)}}><img src={this.props.img} alt="pic" /></button>
             
            </div>
        )
    }
}
