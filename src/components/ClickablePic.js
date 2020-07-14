import React, { Component } from 'react'

export default class ClickablePic extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            glasses: false
        }
    }
    changePic = () => {
        this.setState( state => ({clicked: !state.clicked}) )
    }
    
    render() {
        return (
            <div className="glasses">
                <img src={this.state.clicked ? this.props.imgClicked : this.props.img} onClick={this.changePic} alt="Glasses or no glasses"></img>
            </div>
        )
    }
}


