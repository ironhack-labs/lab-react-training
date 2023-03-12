import "./FaceBook.css"
import profilesJSON from "./../../data/berlin.json"
import React, { Component } from 'react';

class FaceBook extends Component {
 state = {
    profiles: profilesJSON
 }

    render() {
        const {profiles} = this.state
        return (
            <div className="FaceBook">

            {profiles.map(profile => {
                return <div className="profilecard"> 
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