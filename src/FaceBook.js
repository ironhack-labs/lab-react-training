import React, { Component } from "react";
import profiles from './data/berlin.json';

class FaceBook extends Component {

    state = {
        selected: true
    }

    getType = (isStudent) => {
        return isStudent ? "Student" : "Teacher";
    }

    handleClick = () => {
        
    }

    render () {
        return (
            <section>
                <div className="tabs">
                    { profiles.map(profile => (
                        <button>{profile.country}</button>
                    ))}
                </div>
    
                <div className="flex-wrap-half">
                    { profiles.map(profileProps => (
                        <div className="proper-card">
                            <img src={profileProps.img} alt={profileProps.firstName} />
    
                            <div className="proper-card__info">
                                <p><span>First Name: </span>{ profileProps.firstName }</p>
                                <p><span>Last Name: </span>{ profileProps.lastName }</p>
                                <p><span>Country: </span>{ profileProps.country }</p>
                                <p><span>Type: </span>{ this.getType(profileProps.isStudent) }</p>
                            </div>
                        </div>
                    )) }
                </div>
            </section>
        )
    }
}

export default FaceBook