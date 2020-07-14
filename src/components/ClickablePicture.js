import React, { Component } from 'react'

const pictures = [
    {
    img: './img/persons/maxence.png',
    imgClicked:'./img/persons/maxence-glasses.png'
    }
]

class ClickablePicture extends Component {
    constructor(props){
        super(props)
        this.state = {
            img: pictures[0].img,
        }
    }

    imager = () => {
        let image=''
        if (this.state.img === pictures[0].img){
                image= pictures[0].imgClicked
            }else{
                image=pictures[0].img
            } 
        this.setState (() => ({img:image}));
    }
    render() {
        return (
            <img src={this.state.img} onClick={this.imager} alt='Clickable glasses'/>
        )
    }
}

export default ClickablePicture