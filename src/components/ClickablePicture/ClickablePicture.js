import React, { Component } from 'react'

export class ClickablePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img : props.img,
            clickedImg : props.imgClicked
        }
    }
    click = () => {
        this.setState((state) => ({img: state.clickedImg}))
    }
    render() {
        return (
            <div>
                <img onClick={this.click} src={this.state.img} alt=""></img>
            </div>
        )
    }
}

export default ClickablePicture
