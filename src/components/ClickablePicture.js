import React from 'react'

class ClickablePicture extends React.Component {
    state = {
        glasses: false,
        img:'/img/persons/maxence.png'
      }
    imageHandler = () => {
        this.setState(state => ({
            glasses: !state.glasses
        }))
    }
    render(){
        return (
            <>
                <img src={this.state.glasses ? '/img/persons/maxence-glasses.png' : '/img/persons/maxence.png'} 
                
                onClick={this.imageHandler}

                alt="This how I feel" className="foro-pic"/>
            </>
)}
}

export default ClickablePicture; 