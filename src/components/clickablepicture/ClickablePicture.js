import React, { Component } from 'react'
import './ClickablePicture.css'


export default class ClickablePicture extends Component {
   

    state = {
        image: [this.props.img, this.props.imgClicked],
        clicked: false
    
    }

   
    changeImg = () => {

        this.setState({
            clicked: !this.state.clicked
        })
  
    }

    render() {
    
        return (
            <div>
                <img className="clickable-photo"
                    src={this.state.image[this.state.clicked ? 1 : 0]} 
                    alt='Max' 
                    onClick={this.changeImg}></img>
            </div>
        )
    }
}
