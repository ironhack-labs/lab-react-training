import React from 'react'

export default class ClickablePicture extends React.Component {

    
    state = {
        coolGuy: true,
    }

    clickHandler = () => {
        this.setState((state, props) => ({
            coolGuy: !state.coolGuy
        }))
      }

    render() {
        return (
            <div class="clickedPicture" onClick= {this.clickHandler}>
            {this.state.coolGuy ? <img src={this.props.img} alt="uncool looking guy"/> 
            : 
            <img src={this.props.imgClicked} alt="uncool looking guy"/> }
           
            </div>
        )
    }
}

// img='/img/persons/maxence.png'
//         imgClicked='/img/persons/maxence-glasses.png'