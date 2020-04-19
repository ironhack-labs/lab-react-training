import React, { Component } from 'react'

class Carousel extends Component{
    state ={
        imgList: this.props, 
        index: 0
    }
    forward = () =>{
        if (this.state.index + 1 === this.state.imgList.length){
            this.setState({
                index: 0
            })
        }else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }
    back = () =>{
        if (this.state.index - 1 === -1){
            this.setState({
                index: this.state.imgList.length -1
            })
        }else {
            this.setState({
                index: this.state.index -1 
            })
        }
    }
    render(){
        const { imgs } = this.props;
        return(
            <div className='carousel'>
                <img src={imgs[this.state.index]} alt='' />
                <button onClick={this.back}>Back</button>
                <button onClick={this.forward}>Forward</button>
            </div>
        )
    }
}

export default Carousel;