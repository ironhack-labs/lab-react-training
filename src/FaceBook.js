import React, { Component } from "react";
import profiles from './data/berlin.json';

class FaceBook extends Component {

    state = {
        active: false
    }

    getType = (isStudent) => {
        return isStudent ? "Student" : "Teacher";
    }

    handleClick = (e) => {
        e.preventDefault();
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render () {
        return (
            <section>
                <div className="tabs">
                    { profiles.map(profile => (
                        <button onClick={this.handleClick} className={this.state.active ? 'active' : null}>{profile.country}</button>
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