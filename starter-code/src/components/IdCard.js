import React, { Component } from "react";
import {Card} from "../styles/Card"

export default class IdCard extends Component {
    render () {
        return (
            <Card>
                <div>
                    <img src={this.props.picture} alt="Person"/>
                </div>
                <div>
                    <h4>First name: <span>{this.props.firstName}</span></h4>
                    <h4>Last name: <span>{this.props.lastName}</span></h4>
                    <h4>Gender: <span>{this.props.gender}</span></h4>
                    <h4>Height: <span>{this.props.height}</span></h4>
                    <h4>Birth: <span>{this.props.birth}</span></h4>
                </div>
            </Card>
        )
    }
}