import React from 'react'
import '../components/LikeButton.css'


class LikeButton extends React.Component {

    color = ['purple','blue','green','yellow','orange','red']

    state = {
        count: 0,
        color: "",
    }   
    
    handleClick = () => {
            
        this.setState({
           count: this.state.count +1, 
        })
    }

    randomCol = () => {
        let color = ['purple','blue','green','yellow','orange','red']

        let randomIndex = Math.floor(Math.random()*this.color.length)

        let randomColor = this.color[this.randomIndex]

        this.setState({
            color: this.randomColor
        })
    }


        render() {

            //  buttonStyle = {
            //      "backgroundColor": `$randomCol}`
            //  }
        
        return (
            <div class="buttonContainer">
                <button style={{backgroundColor: this.state.color}} class="likeButton" onClick={this.randomCol} onClick={this.handleClick}>{this.state.count} Like</button>
            </div>
            )
        
        }
}

export default LikeButton