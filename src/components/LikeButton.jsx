import React, {Component} from "react"
import '../App.css'

class LikeButton extends Component{
    state = {
       likeCounter: 0,
       text : "Like"
    }

    counterInAction = () => {
        this.setState({
            likeCounter: this.state.likeCounter +1,
            text : "Likes"
        })
    }


    render(){
        return(
            <div>
                <button className="like-button" onClick={this.counterInAction}>
                {this.state.likeCounter} {this.state.text}
                </button>
            </div>
        )
    }
}


export default LikeButton