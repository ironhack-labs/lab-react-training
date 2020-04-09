import React, { Component } from 'react';

class IdCard extends Component {
    render() {
        return (
            <div className="card">
                <img alt="man" src={this.props.img} />
                <p><b>First name</b> {this.props.name}</p>
                <p><b>Last name</b> {this.props.last}</p>
                <p><b>Gender</b>  {this.props.gender}</p>
                <p> <b>Height</b> {this.props.height}</p>
                <p><b>Birth</b> {this.props.birth}</p>

            </div>
        );
    }
}
export default IdCard;
