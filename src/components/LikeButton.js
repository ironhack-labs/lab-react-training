import React from 'react'
import styled from "styled-components"

class LikeButton extends React.Component{

    state = {
        counter: 0,
        bgIndex: 0,
        bgColor: ['purple','blue','green','yellow','orange','red']
    }

    addLike(){
        this.setState({counter: this.state.counter +1})
        this.changeBackgroundColor()
    }

    changeBackgroundColor(){
        if(this.state.bgIndex === 5){
            this.setState({bgIndex: 0})
        }else{
            this.setState({bgIndex: this.state.bgIndex +1})            
        }
    }

    render(){
        
        const LikeButtonDiv = styled.div`
        width: 100px;

        `
        const LikeButt = styled.button`
        color: white;
        background-color: ${this.state.bgColor[this.state.bgIndex]} ;
        `

        return (
            <LikeButtonDiv>
                <LikeButt onClick={()=>this.addLike()}>{this.state.counter} Likes</LikeButt>
            </LikeButtonDiv>
        )
    }
}

export default LikeButton