import React, { Component } from 'react'

export default class IDCard extends Component {
    render() {
        return (
            <div className="idCard">
                <div>
                <img src={this.props.picture} alt="" style={{ width: '150px' }} />
                </div>
                <div>
               <h5> First Name: {this.props.firstName}</h5>
               <h5> Last Name: {this.props.lastName}</h5>
               <h5> Gender: {this.props.gender}</h5>
               <h5> Height: {this.props.height}m</h5>
               <h5> Birth: {this.props.birth.toString().slice(0,15)}</h5>
               </div>
            </div>
        )
    }
}
