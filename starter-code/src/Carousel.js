import React, { Component } from 'react';

class Carousel extends Component {

    index=0;

    state ={
        shownPicture: this.props.imgs[this.index]
    }
    
    nextImg = () => {
        this.index+=1;
       
        if(this.index < this.props.imgs.length){
            this.setState({
                shownPicture:this.props.imgs[this.index]
            })
        }
        else{
            this.index=0
            this.setState({
                shownPicture:this.props.imgs[this.index]
            })
        }
    }
    previousImg = () => {
        this.index-=1;
        
        if(this.index >= 0){
            this.setState({
                shownPicture:this.props.imgs[this.index]
            })
        }
        else{
            this.index=this.props.imgs.length-1
            this.setState({
                shownPicture:this.props.imgs[this.index]
            })
        }
    }

    render() {
        return(
            <div>
                <button onClick={this.previousImg} >Previous</button>
                <img alt="" src={this.state.shownPicture}/>
                <button onClick={this.nextImg}>Next</button>
            </div>
        )
    }
};

export default Carousel;