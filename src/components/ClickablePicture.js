import React, { Component } from 'react'


class ClickablePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgsrc: props.img
        }
    }

    changePic = () => {
        if (this.state.imgsrc === this.props.img) {
            this.setState({
                imgsrc: this.props.imgClicked
            })
        } else {
            this.setState({
                imgsrc: this.props.img
            })
        }
    }

    render() {
        return (
            <div>
               <img onClick={this.changePic} src={this.state.imgsrc} alt=""></img>
            </div>
        )
    }
}


export default ClickablePicture