import React, { Component } from 'react'

export default class IdCard extends Component {
    render() {
        return (
            <div className="col-10 box">
                <div className="col-3"><img src={this.props.picture} alt={this.props.firstName} /></div>
                <div className="col-7">
                    <h5><strong>First Name:</strong> {this.props.firstName}</h5>
                    <h5><strong>Last Name:</strong> {this.props.lastName}</h5>
                    <h5><strong>Gender:</strong> {this.props.gender}</h5>
                    <h5><strong>Height:</strong> {this.props.height}</h5>
                    {/* <h5><strong>Birth Date:</strong> {this.props.birth}</h5> */} 
                </div>
            </div>
        )
    }
}
