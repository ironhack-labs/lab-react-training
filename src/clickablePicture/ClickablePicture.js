import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    
    state = {
        img: this.props.img,
        imgClicked: this.props.imgClicked,
    }

    clickHandler = () => {
        console.log('hihihi')
        
        this.setState((state, props) => ({
            img: this.state.imgClicked,
            imgClicked: this.state.img
        }))
    }
    render() {
        return (
            <div>
                <img src={this.state.img} onClick={this.clickHandler} style={{width:"100px"}}alt="person"/>
            </div>
        )
    }
}
