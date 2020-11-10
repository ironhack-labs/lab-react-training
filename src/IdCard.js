import React, { Component } from 'react'

export class IdCard extends Component {
    date =this.props.birth.toLocaleString('en-US', {weekday: 'short', month: 'long', day: '2-digit', year: 'numeric'})
    render() {
        return (
            <div className='flex borderWrapper'>
                <img src={this.props.picture} alt={this.props.firstName}/>
                <div>
                    <p><span className='bold'>First name: </span>{this.props.firstName}</p>
                    <p><span className='bold'>Last name: </span>{this.props.lastName}</p>
                    <p><span className='bold'>Gender: </span>{this.props.gender}</p>
                    <p><span className='bold'>Height: </span>{this.props.height}m</p>
                    <p><span className='bold'>Birth: </span>{this.date}</p>
                    {/* <p><span>Birth:</span>{this.props.birth}</p> */}
                </div>
            </div>
        )
    }
}

export default IdCard
