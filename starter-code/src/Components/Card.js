import React, { Component } from 'react';

class Card extends Component {

      state = { 
        lastName:this.props.lastName,
        firstName:this.props.firstName,
        gender:this.props.gender,
        height:this.props.height,
        birth:this.props.birth,
        picture:this.props.picture

      }

  
  render(){
    return (
        <div>
            <h3>First Name:</h3>
            <p>{this.state.firstName} </p>
  
            <h3>Last Name:</h3>
            <p>{this.state.lastName}</p>
  
            <h3>Gender:</h3>
            <p>{this.state.gender}</p>
            
            <h3>Height:</h3>
            <p>{this.state.height}</p>
            
            <h3>Birth:</h3>
            <p>{this.state.birth}</p>

             <img src={this.state.picture} alt="picture" />
      </div>
    )
  }
}

export default Card;



