import React, { Component } from 'react'

class LikeButton extends Component {
    state = {
        count: 0
      }
     
      render() {
       
        const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
        
        return (
            <button  onClick={() => this.setState({ count: this.state.count + 1 })} 
            style={{ backgroundColor: colors[this.state.count % colors.length] }}>
            {this.state.count}Likes</button>
        )
      }  
}


export default LikeButton


