import React from 'react';

const colorList= ["blue", "red","green", "yellow", "purple", "pink"]

class LikeButton extends React.Component{
    state={
        count: 0,
        colorChange: `${colorList[0]}`
    };
    handleIncrementClick = () => {

       this.setState({
           count: this.state.count + 1,
           colorChange: `${colorList[Math.floor(Math.random()*(colorList.length+1))]}`
       });
    
      };
    render (){
        return <div>
            <button onClick={this.handleIncrementClick} style={{backgroundColor: `${this.state.colorChange}`}}>{this.state.count} Likes</button>
           
        </div>
    }
}


export default LikeButton;