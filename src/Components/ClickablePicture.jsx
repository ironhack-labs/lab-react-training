import React, { Component } from 'react'


class ClickablePicture extends React.Component {

    state = {
        isClicked: false,
    }

handleClick = () => {
    this.setState({isClicked: !this.state.isClicked})
} 
    render (){
    return (
        <div onClick={this.handleClick}>
            <img
            src={this.state.isClicked ? this.props.imgClicked : this.props.img}
            alt="profile-pic"
            />
            
        </div>
    )
}

}


export default ClickablePicture
