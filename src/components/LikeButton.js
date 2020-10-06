import React, { Component } from 'react'

export default class LikeButton extends Component {
    constructor() {
        super();
    
        this.state = {
             likes: 0,
             backgroundColor: '', 
        }
    }

    handleIncrement = () => {
        const colors = ['purple','blue','green','yellow','orange','red']
        let randomColor = colors[Math.round(Math.random()*(colors.length-1))]
        this.setState(prevState => ({ 
            likes: prevState.likes +1,
            backgroundColor: randomColor
        }))
    }

    // handleColorChange = () => {
        
    //     this.setState(prevState => ({
    //         backgroundColor: prevState.backgroundColor = randomColor
    //     }))
    // }
    
    render() {
        const { likes } = this.state
  
        return (
            <div className="like-btn">
                <button onClick={this.handleIncrement} style={{backgroundColor: 'none'}}>{likes} Likes</button>
            </div>
        )
    }
}
