import React, { Component } from 'react';

export default class ClickablePicture extends Component {
    constructor(props){
        super(props) 
        this.state = {
            isClicked: false,
            source: this.props.img
        }
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.isClicked,
            source: this.state.source === this.props.imgClicked? this.props.img : this.props.imgClicked

        })
    }

    render(){
        return (
            <div className="box">
                <div>
                <img onClick={this.handleClick} src={this.state.source} alt="click"/>
                </div>
            </div>
        )
    }

}


