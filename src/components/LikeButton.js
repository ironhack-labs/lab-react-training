import React, {Component} from 'react'

class LikeButton extends Component {
    
    constructor(props) {
        super(props);
        this.state={likes: 0, likeColor:"green"}

    }

    handleLikes = () => {
        this.setState({ likes:this.state.likes + 1 })
    }
    
       
    handleBgColor = () => {
        const colors = ['purple',
        'blue',
        'green',
        'yellow',
        'orange',
        'red']
        
        const someColor = colors[Math.floor(colors.length * Math.random())];
        this.setState({
            likeColor: someColor
        })
    }
    

    render() {
    return( <button className="" style={{likeColor:this.state.likeColor}} onClick={() => {this.handleLikes(); this.handleBgColor()}}> {this.state.likes} Likes </button>)
    }
  }


export default LikeButton ;
