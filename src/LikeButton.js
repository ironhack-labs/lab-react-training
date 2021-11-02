import React from 'react';
import './App.css';

class LikeButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numOfLikes: 0
        }
    }
    
    increaseLikes = () => {
        this.setState({
            numOfLikes: this.state.numOfLikes + 1
        }) 
    }  

    render(){
        return (
            <>
              <button onClick = {this.increaseLikes}>Like: {this.state.numOfLikes}</button>   
            </>
        )
    }   
}

export default LikeButton;