import React from 'react'

class LikeButton extends React.Component{

    state = {
        likeCounter: 0,
        btnColor: `rgb(${this.getRandomColor()})`
    }

    getRandomNum(){
        return Math.floor(Math.random()*255)
    }

    getRandomColor(){
        const r = this.getRandomNum(), g = this.getRandomNum(), b = this.getRandomNum()
        return `${r},${g},${b}`
    }

    addLike(){
        this.setState({likeCounter: this.state.likeCounter+1})
    }

    
    render(){

        const style = {
            backgroundColor: `rgb(${this.getRandomColor()})`
        }

        return(
            <div>
                <button style={style} onClick={()=>this.addLike()}>{this.state.likeCounter} Likes</button>
            </div>
        )
    }
}

export default LikeButton
