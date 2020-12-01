import React, { Component } from 'react'
import './IdCard.css'

export default class IdCard extends Component {
    render() {
        return (
            <div>
                <article>
                <div className="image">
                <img src={this.props.picture} alt=""/>
                </div>
                <div className="details">
                    <span>First name: {this.props.firstName} </span><br></br>
                    <span>Last name: {this.props.lastName} </span><br></br>
                    <span>Gender: {this.props.gender} </span><br></br>
                    <span>Height: {this.props.height} </span><br></br>
                    <span>Birth: {this.props.birth.toString().slice(0,15)} </span><br></br>
                </div>

                </article>
            </div>
        )
    }
}
