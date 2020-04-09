import React, { Component } from 'react';

class IdCard extends Component {
    render() {
        return (
            <div className='user-container'>
                <div className='user-image'>
                    <img src={this.props.picture} alt='user'></img>
                </div>
                <div className='user-information'>
                    <p>First name: {this.props.firstName}</p>
                    <p>Last name: {this.props.lastName}</p>
                    <p>Gender: {this.props.gender}</p>
                    <p>Height: {this.props.height}</p>
                    <p>Height: {this.props.birth}</p>
                </div>
            </div>
        )
    }
}


export default IdCard;