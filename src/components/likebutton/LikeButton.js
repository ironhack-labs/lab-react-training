import React, { Component } from 'react';

class LikeButton extends Component {

    state = {
        count:0,
        bgColor:''
    }

    clickHandler = () => {
        const randomC = ['purple','blue','green','yellow','orange','red'];

        let randomPick = randomC[Math.floor(Math.random() * randomC.length)];

        this.setState({
            count : this.state.count + 1,
            bgColor: randomPick
        })
    }

    render(){
        return (
            <button 
                style={{backgroundColor:this.state.bgColor, height:'40px', margin:'10px', cursor:'pointer'}}
                onClick={(e) => this.clickHandler(e)} 
            > 

            {this.state.count} Like{ this.state.count === 1 ? "" : "s" }

            </button>
        )
    }
}
export default LikeButton;