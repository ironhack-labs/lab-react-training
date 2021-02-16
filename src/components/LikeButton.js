import React from 'react';


class LikeButton extends React.Component{
    constructor(){
        super();
        this.state={
            count: 0,
            bgColor: ""
        }
    }
    
    clickEvent = () =>{
        const count = this.state.count
        this.setState({count : count + 1})

        // bg color
    //   const backColors = ['purple','blue','green','yellow','orange','red']
    //   console.log("COlORS ARRAY: ", backColors)
    //   for(let i = 0; i < backColors.length; i++){
    //       if(this.state.count){
    //           this.bgColor = backColors[i];
    //       }
    //       
    //       console.log("COlOR: ", this.bgColor)
    //   }
    }
    colorBackground = () =>{
        const backColors = ['purple','blue','green','yellow','orange','red']
        for(let i = 0; i < backColors.length; i++){
            console.log("COLOR: ", backColors)
           this.bgColor = backColors[i];
           
        }
    }
 
    render(){
        return (
            <button style={{ backgroundColor: this.colorBackground}} id="btn" type="button" onClick={this.clickEvent} ><div>{this.state.count} Likes</div></button>
        )
    }	
			}

            

export default LikeButton