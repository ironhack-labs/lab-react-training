import React, { Component } from 'react'

export class ClickablePicture extends Component {
    state={
        imgPath:this.props.img
    }
    handleClick(){
        let img = this.state.imgPath === this.props.img? this.props.imgClicked : this.props.img
        this.setState({imgPath:img})
    }
    render() {
        return (
            <div>
                <img onClick={()=>{this.handleClick()}} src={this.state.imgPath} alt='clickableImg' />
            </div>
        )
    }
}

export default ClickablePicture
