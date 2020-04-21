import React, { Component } from 'react';

class ClickablePicture extends Component {
    state ={
        imgAnimated: false,
    }
    handleClick() {
        this.setState(initialState => ({
            imgAnimated: !initialState.imgAnimated
        }))
    }
    render(){
        return(
            <div>
                <img className="clickablepicture-img" onClick={()=> this.handleClick()} src={this.state.imgAnimated ? "/img/persons/maxence-glasses.png" : "/img/persons/maxence.png"}></img>
            </div>
        )
    }
}

export default ClickablePicture;