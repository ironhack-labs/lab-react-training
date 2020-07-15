import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
        this.toggleImg = this.toggleImg.bind(this) 
    }

    toggleImg(){
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <div>
                <img onClick={this.toggleImg} src={this.state.clicked ? this.props.img : this.props.img2} alt={this.props.img} />
            </div>
        )
    }
}

