import React,{Component} from 'react'
import '../assets/css/LikeButton.css'

export default class LikeButton extends Component{

    state = {
        likes: 0
    }
    addLike=()=>{
        this.setState({likes:this.state.likes +1})
    }
    
    render(){
        return(
            <div className='likeButton'>
                <button  className='button__like' onClick={this.addLike}> {this.state.likes} Likes </button>
            </div>
        )
    }
}