import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    state={
        img : this.props.img
    }

    Handleclick = () =>{
        if (this.state.img===this.props.img){this.setState({img : this.props.imgClicked})}
        else this.setState({img : this.props.img})
    }
    render() {
        return (
            <div>
                <img onClick= {this.Handleclick} src={this.state.img} alt=''/>
            </div>
        )
    }
}
