import React, { Component } from 'react';
import FacebookUsers from './../data/berlin.json';
import './../views/IdCard.css';

const countries = [...new Set(FacebookUsers.map(user => user.country))];

export class Facebook extends Component {
    state = {
        users : [...FacebookUsers].map(user => {return {...user, color:"white"}})
    }

    handleFilterCountry = (country) => {
        const copyUsers = [...this.state.users];

        copyUsers.forEach(user => {
            user.country === country ? user.color = "#6495ed" : user.color = "#ffffff";
        })

        this.setState({users : copyUsers})
    }

    render() {

        return (
            <div className="Facebook">
                {countries.map((country) => 
                    <button onClick={() => this.handleFilterCountry(country)} key={country}>{country}</button>
                )}
                {this.state.users.map((user, index) =>
                    <div
                        style={
                            {backgroundColor : user.color}
                        }
                        className="IdCard" key={index}
                    >
                        <img src={user.img} alt=""/>
                        <aside>
                            <p>First Name: {user.firstName}</p>
                            <p>Last Name: {user.lastName}</p>
                            <p>Country: {user.country}</p>
                            <p>Type: {user.isStudent ? "Student" : "Teacher"}</p>
                        </aside>
                    </div>
                )}
            </div>
        )
    }
}

export default Facebook
