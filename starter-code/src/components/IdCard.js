import React, { Component } from 'react'
//import { ICard } from "../style/components";

export default class IdCard extends Component {
    render() {
        return (
        //    <ICard>
        <div className="IdCard">
            <img src={this.props.picture} alt="face"></img>
            <div>
            <p><b>First Name: </b> {this.props.firstName}</p>
            <p><b>Last Name: </b> {this.props.lastName}</p>
            <p><b>Gender: </b> {this.props.gender}</p>
            <p><b>Height: </b> {this.props.height}</p>
            <p><b>Birth: </b> {this.props.birth.toLocaleDateString()}</p>
            </div>
            </div>
                
          //  </ICard>
        )
    }
}


