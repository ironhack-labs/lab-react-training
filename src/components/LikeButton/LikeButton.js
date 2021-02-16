import React, {Component} from "react";

class LikeButton extends Component {
    state = {
    count: 0,
    backgroundColor: "purple"
    }
    
    handleClick = () => {
    const colors = ['purple','blue','green','yellow','orange','red']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const newLike = this.state.count +1
    this.setState({
        count: newLike, 
        backgroundColor:randomColor
    })
    }

    render(){
        return (
            <button style={{
                background:this.state.backgroundColor,
                color:"white",
                height:"70px",
                width:"120px"
                }} 
                onClick={this.handleClick}>Likes {this.state.count}</button>
        )
    }
}

export default LikeButton;