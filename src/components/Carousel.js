import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'


class Carousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: props.imgs,
            currentImage: 0
        }
    }

    switchImageF = () => {
        if(this.state.currentImage === this.state.images.length-1){
            this.setState(() => ({currentImage:0}))
        }else{
            this.setState(({currentImage}) => ({currentImage:currentImage + 1}))
        }
    }

    switchImageB = () => {
        if(this.state.currentImage === 0){
            this.setState(() => ({currentImage:this.state.images.length-1}))
        }else{
            this.setState(({currentImage}) => ({currentImage:currentImage - 1}))
        }
       
    }

    render() {
        return (
            <div>
                <button type='button' onClick={this.switchImageB}><FontAwesome className="fa fa-arrow-left"/></button>
                <img className='dice-img' src={this.state.images[this.state.currentImage]}  alt='carousel images'/>
                <button type='button' onClick={this.switchImageF}><FontAwesome className="fa fa-arrow-right"/></button>
            </div>
        )
    }
}

export default Carousel

