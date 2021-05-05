import React from 'react';

export default class LikeButton extends React.Component{

    state = {
        counter: 0,
        colorIndex: 0
      }
    
      clickHandler = () => {
        this.setState((state, props) => ({
          counter: state.counter + 1,
          colorIndex: (state.colorIndex + 1)%6
          }))
      } 
    
    render() {

        const bgColor = ['purple','blue','green','yellow','orange','red'];

        return (
            <button onClick={this.clickHandler} style={{backgroundColor: bgColor[this.state.colorIndex]}} > {this.state.counter} likes</button>
        )
    }
}