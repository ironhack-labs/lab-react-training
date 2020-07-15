import React, { Component } from 'react'

export class ClickablePicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }
    changeImg =()=>{
        this.setState({clicked : !this.state.clicked})
    }

    render() {
        return (
            <div>
                <img onClick={this.changeImg} src={this.state.clicked ? this.props.img : this.props.imgClicked} alt="image" />
            </div>
        )
    }
}

export default ClickablePicture
