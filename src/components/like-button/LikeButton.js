import { Component } from "react";

class LikeButton extends Component {

    state = {
        likes : 0,
        colors : ['purple','blue','green','yellow','orange','red']
    }

  

    handleIncrementLikes = () => {
        this.setState({
            likes: this.state.likes + 1,
            //colors: this.state.colors[Math.floor(Math.random() * (0 - 5)) + 0]
        })
    }

  

    render(){
        return (
            <button type="button" className="btn btn-danger p-5" style={{backgroundColor: this.state.colors}} onClick={this.handleIncrementLikes}>Likes {this.state.likes}</button>

        )
    }
   
}

export default LikeButton