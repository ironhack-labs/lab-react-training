import React, { Component } from 'react'


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
                <img 
                    src={this.state.image[this.state.clicked ? 1 : 0]} 
                    alt='Picture of Max' 
                    onClick={this.changeImg}></img>
            </div>
        )
    }
}
