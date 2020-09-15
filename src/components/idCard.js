import React, { Component } from 'react';

class IdCard extends Component {
    render() {
        return (
            <div className="IdCard box">
                <div>
                    <img src={this.props.picture}/>
                </div>
                <div>
                    <p><strong>First Name:</strong> {this.props.firstName}</p>
                    <p><strong>last Name:</strong> {this.props.lastName}</p>
                    <p><strong>Gender:</strong> {this.props.gender}</p>
                    <p><strong>Height:</strong> {this.props.height}</p>
                    <p><strong>Birth:</strong> {this.props.birth.toString().slice(0, 15)}</p>
                </div>
            </div>
        )
    }
}

export default IdCard
