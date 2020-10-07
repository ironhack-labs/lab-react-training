import React, { Component } from 'react';
import profilesJSON from '../data/berlin.json';



class FaceBook extends Component {

    state = {
        profiles: profilesJSON
    };

    

    render() {
        return (
            <div>
                {this.state.profiles.map(prof => (

                <div className="container-id-card">
                <div><img src={prof.img} alt="" width="150px"/></div>
                <ul>     
                    <li><b>First name:</b> {prof.firstName}</li>
                    <li>Last name: {prof.lastName}</li>
                    <li>Country: {prof.country}</li>
                    <li>Type: {prof.isStudent ? 'Student' : 'Teacher'} </li>
                </ul>  
                </div>
                ))}
            </div>
        )
    }
}


export default FaceBook;