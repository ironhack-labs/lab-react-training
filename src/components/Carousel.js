import React, { Component } from 'react'

export default class Carousel extends Component {
    constructor(props){
        super(props)
        this.state={
            allImg:props.imgs,
            pickedImg:0
        }
    }

    changeLeft=()=>{
        if(this.state.pickedImg === this.state.allImg.length-1){
            this.setState({pickedImg:this.state.pickedImg})
        }else{
            this.setState({pickedImg:this.state.pickedImg +1})
        }
    }

    changeDcha=()=>{
        if(this.state.pickedImg === 0){
            this.setState({pickedImg:this.state.allImg.length-1})
        }else{
            this.setState({pickedImg:this.state.pickedImg - 1})
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.changeLeft}>LEFT</button>
                <img src={this.state.allImg[this.state.pickedImg]} alt="carouselimage"></img>
                <button onClick={this.changeDcha}>RIGHT</button>
            </div>
        )
    }
}
