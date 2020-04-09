import React, {Component} from 'react';
import { render } from 'react-dom';
import style from './IdCard.css'

class IdCard extends Component  {
    render(){
        return(
            <div className="card">
                <img src={this.props.picture}></img>
                <div className="card-details">
                <div >First name: {this.props.firstname}</div>
                <div>Last name: {this.props.lastname}</div>
                <div>Gender: {this.props.gender}</div>
                <div>Height: {this.props.height}</div>
                <div>Birth: {this.props.birth}</div>
                </div>
            </div>
        )

    }
}

export default IdCard;