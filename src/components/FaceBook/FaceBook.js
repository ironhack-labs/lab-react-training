import "./FaceBook.css"
import profilesJSON from "./../../data/berlin.json"
import React, { Component } from 'react';

class FaceBook extends Component {
 state = {
    profiles: profilesJSON,
    filter: ""
 }

 handleFilter = (event) =>{
    this.setState({filter: event.target.value})
 }
    render() {
        const {profiles} = this.state
        return (
            <div className="FaceBook">
            <div className="btn-container">
            <button onClick={this.handleFilter} value="">All</button>
            <button onClick={this.handleFilter} value="England">England</button>
            <button onClick={this.handleFilter} value="USA">USA</button>   
            <button onClick={this.handleFilter} value="Malaysia">Malaysia</button> 
            <button onClick={this.handleFilter} value="Germany">Germany</button>
            </div>

            {profiles.map(profile => {
                return <div key={profile.className} className="profilecard" style={profile.country === this.state.filter ? {backgroundColor: 'aquamarine'} : null}> 
                <img src={profile.img} alt="" />
                <div className="infocard">
                <p><strong>First Name: </strong>{profile.firstName}</p>
                <p><strong>Last Name: </strong>{profile.lastName}</p>
                <p><strong>Country: </strong>{profile.country}</p>
                <p><strong>Type: </strong>{profile.isStudent ? "Student" : "Teacher"}</p>
                </div>
                </div>
            })}
                
            </div>
        );
    }
}

export default FaceBook;