import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    
    state = {
        img: this.props.img,
        clicked: false
    }

    swapImg = () => {
        if (this.state.clicked) {
            this.setState({img: this.props.img, clicked: false})
        } else {
            this.setState({img: this.props.imgClicked, clicked: true})
        }
    }
 
    render() {
        return (
        <div className="ClickablePicture card mb-3">
            <div className="row g-0">
                <div className="card-body">
                    <img className="clickableImg" src={this.state.img} onClick={this.swapImg} width="50px" alt="Person" align="right"/>
                </div>
            </div>
        </div>
        )
    }
}