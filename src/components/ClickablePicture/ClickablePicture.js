import React, { Component } from 'react';
import './ClickablePicture.css';

class ClickablePicture extends Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    
    render() {      
      return (
        <div>
            <img className='clickable-image' onClick={this.handleClick} src={!this.state.clicked ? this.props.img : this.props.imgClicked} alt="Person smiling" />
        </div>
        );
    }
}

export {ClickablePicture};