import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state = {
        img: this.props.img,
        click: false
    }

    changeImg = () => {
        this.setState({
            click: !this.state.click
        })
    }


    render() {
        return (
            <div>
                <img src={!this.state.click ? this.props.img : this.props.imgClicked} alt="" onClick={this.changeImg}/>
            </div>
        )
    }
}
