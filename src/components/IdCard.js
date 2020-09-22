import React, { Component } from 'react'

export default class IdCard extends Component {
    render() {
        return (
        
            <div className="app">
            
                <div className="IdCard box">
                <img src={this.props.picture} alt=""/>
                    <div className="profileinfo">
                        <strong> First Name </strong> : {this.props.firstName}
                        <br/>
                        <strong>Last Name </strong>: {this.props.lastName}
                        <br/>
                        <strong>Height </strong>: {this.props.height}
                        <br/>
                        <strong>Birthday </strong>: {this.props.birth.toDateString()}
                    </div>
                </div>
            </div>
        
        )
    }
}