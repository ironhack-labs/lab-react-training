import React, { Component } from 'react'

export default class IdCard extends Component {
    render() {
       
            

            return (
            <div className="container">
                
                <img src={this.props.picture} alt="deine mudda"/>
                
                <div>
                <h2>Last name: {this.props.lastName}</h2> 
                <h2>First name: {this.props.firstName}</h2>
                <h2>Gender: {this.props.gender}</h2>
                <h2>Height: {this.props.height}</h2>
                <h2>Birth: {this.props.birth.toLocaleDateString()}</h2>
                </div>
            </div>
   
            
        )
    }
}
