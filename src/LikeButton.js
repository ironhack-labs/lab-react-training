import React from 'react';
export class LikeButton extends React.Component{
  constructor (props){
    super(props);
    this.state= {
      likes=0,
    }
  }

  numberLikes = ()=> {
    this.setState((prevState, props)=>{
      return {likes: prevState.likes +1}
    })
  }

  render (){
    return (
      <button onClick={this.numberLikes}>{this.state.likes} Likes</button>
    )
  }
}