import React, { Component } from 'react'

export class IdCard extends Component {
    render() {
        return (
            <div className="iteracion1">
            <img src={this.props.picture}/>
             <div className="cards">
                <ul>
                    <li> <b>Last Name:</b>{this.props.lastName}</li>
                    <li> <b> First Name:</b> {this.props.firstName}</li>
                    <li> <b>Gender:</b>{this.props.gender}</li>
                    <li> <b>Height:</b>{this.props.height}</li>
                    <li> <b>Birth :</b>{this.props.date}</li>
                </ul>
            </div>
            </div>
            
        )
    }
    }


export default IdCard