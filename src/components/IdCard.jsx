import React, { Component } from 'react'

class IdCard extends Component {
    render() {
        return (
            <div className='idCard'>
                <div className='image-idCard'>
                    <img src={this.props.picture} alt="card person"/>
                </div>
                <div className='data-idCard'>
                    <p><strong>First name: </strong>{this.props.firstName}</p>
                    <p><strong>Last name: </strong>{this.props.lastName}</p>
                    <p><strong>Gender: </strong>{this.props.gender}</p>
                    <p><strong>Height: </strong>{this.props.height/100}m</p>
                    <p><strong>Birth: </strong>{this.props.birth.toDateString()}</p>
                </div>
            </div>
        )
    }
}

export default IdCard
