import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
    }

    changeImg = () => {
        this.setState(state => ({clicked: !state.clicked}))
    }

    render() {
        return (
            <div>
                <img onClick={this.changeImg} src={this.state.clicked ? this.props.img : this.props.img2}/>
            </div>
        )
    }
}