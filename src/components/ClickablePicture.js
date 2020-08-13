import React, { Component } from 'react'

class ClickablePicture extends Component {
    state = {
        src: '../../img/persons/maxence.png',
        isClicked: false
    } 
    
   clickPic = () => {
        this.setState({
            src: '../../img/persons/maxence-glasses.png',
            isClicked: !this.state.isClicked
        })
    }
    
    render() {
        return (
        <div>
            <button className="picBtn"><img className='clickablePic' src={this.state.isClicked ?'../../img/persons/maxence-glasses.png':'../../img/persons/maxence.png'} onClick={this.clickPic} /></button>
        </div>
    )
    }
    
}

export default ClickablePicture
