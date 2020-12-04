import React, { Component } from 'react'

export default class Carousel extends Component {

    constructor(props){
        super(props);
        this.state={
            imgIndex:0
        }
    }

    handler =event=>{
        let index=this.state.imgIndex;
        console.log(index,event.target.value)
        if(event.target.value==='left'){
            if(index===0)
            {index=this.props.imgs.length-1;
            }
            else
                index--;
        }else if(event.target.value==='right')
        if(index===this.props.imgs.length-1)
            index=0;
        else{
            index++;}
        this.setState({
            imgIndex:index
        })
    }

    render() {
        return (
            <div >
                <button value='left' onClick={this.handler}>Left</button>
                <img src= {this.props.imgs[this.state.imgIndex]} alt=""/>
                <button value='right' onClick={this.handler}>Right</button>
            </div>
        )
    }
}
