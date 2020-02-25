import React, { Component } from 'react'

class Carousel extends Component{
    state={
        next:0,
        prev:0,
        act: this.props.imgs[0]
    }
    next = () =>{
       
        if(this.state.next !== this.props.imgs.length)
        {
         this.setState({
           next:this.state.next +1,
           act : this.props.imgs[this.state.next]
        })
        }else{
            this.setState({
                act : this.props.imgs[0],
                next:0
            })
            
        } 
    }
    prev = () =>{
        if(this.state.next < 0){
            this.setState({
                act: this.props.imgs[4],
                next: this.props.imgs.length -1
            })
        }else{
            
            this.setState({
                next : this.state.next -1,
                act : this.props.imgs[this.state.next]
            })
        }
       
    }
    
    render(){
      
        return(
            <div>
                <img src= {this.state.act} alt=""></img>
                <button onClick ={this.next}>Next</button>
                <button onClick={this.prev}>Prev</button>
            </div>
            
        )
    }
}

export default Carousel