import { Component } from "react";
import './style.css'

class LikeButton extends Component {
    state = {
        likes: 0,
        colors: ['purple','blue','green','yellow','orange','red'],
        atualColor : '',
        index:0
    }
    handleSetColor = () =>{
        let atualContLike = this.state.likes
        let newCountLike = atualContLike += 1
        let myIndex = this.state.index
        let indexs 
        if(myIndex < 5){
            indexs = myIndex + 1
        }else {
            indexs = 0
        }
        
        this.setState({
            index : indexs,
            likes : newCountLike,
            atualColor: this.state.colors[this.state.index],
        })
        
        
    }
    render(){
        return (
            <button type= 'button' style ={{backgroundColor : this.state.atualColor}} onClick = {this.handleSetColor}>{this.state.likes} Likes</button>
        )
    }
}

export default LikeButton