import React, { Component } from 'react';

export default class IdCard extends Component {
    render() {
        function dateFormat(date) {
            let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            dateString = String(day[Date.getDay(date)] + " " + month[Date.getMonth(date)] + " " + Date.getDate(date) + " " + Date.getFullYear(date));
        }

        return (
            <div>
                <div>
                    <img src="./public/img/persons/maxence.png" alt="person" />
                </div>
                <div>
                    <p>First name: {this.props.firstName}</p>
                    <p>Last name: {this.props.lastName}</p>
                    <p>Gender: {this.props.gender}</p>
                    <p>Height: {this.props.height}</p>
                    <p>Birth: {dateFormat(this.props.birth)}</p>
                </div>
            </div>
        )
    }
}