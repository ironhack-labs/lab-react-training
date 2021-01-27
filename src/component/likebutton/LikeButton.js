import React from 'react'
import 'bulma/css/bulma.css';
import './LikeButton.css'

class LikeButton extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            likes:0,
            colour:'white',
            colourChoices: ['purple','blue','green','yellow','orange','red']
        }
    }

    increaseLikes= ()=>{
        console.log(this.state.colourChoices)
        const currentLikes = this.state.likes
        let colourChoices = this.state.colourChoices
        const newLikes = currentLikes+1
        const buttonColour = colourChoices.pop()
        if(colourChoices.length===0){
            colourChoices = ['purple','blue','green','yellow','orange','red']
        }
        this.setState({likes:newLikes, colour:buttonColour, colourChoices})   
    }


    render(){
        return (
            <p className="control">
                <button className="button is-large" style={{ background: `${this.state.colour}` }} onClick={this.increaseLikes}>{this.state.likes} Likes</button>
            </p>
        )
    }
    
}
export {LikeButton} 
