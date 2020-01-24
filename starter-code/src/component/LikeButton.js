import React, { Component } from 'react'

export default class LikeButton extends Component {

         state ={
            clickCount:0,
            backColor: "grey",
            }

        colorMapper=()=>{
            return "#" + Math.floor(Math.random() * 16777215).toString(16);
        }
              
          clickHandler = () => {
            const newCount=this.state.clickCount +1
            if(newCount >5){
                this.setState({
                    clickCount: newCount,
                    backColor: this.colorMapper()
                })
            }  else{
                this.setState({
                    clickCount: newCount,
                    backColor: "grey"
                })
            }            
              
            };
        
        render() {
            console.log(this.state.clickCount)
        return (
            <div>
            <div onClick = {this.clickHandler}>
             <button style={{backgroundColor: this.state.backColor}}>Klick mich {this.state.clickCount}</button>   
            </div>
             
            </div>
        )
    }
}

